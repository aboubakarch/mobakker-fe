"use client"

import SubscriptionsTable from '@/components/table/SubscriptionTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Subscriptions = () => {

    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedSubscription, setSelectedSubscription] = useState<undefined | SampleSubscription>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedSubscription(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedSubscription(undefined)
    }

    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedSubscription(undefined)
    }

    const handleEdit = (item: SampleSubscription) => {
        setSelectedSubscription(item)
        setModalOpen(true)
    }

    const handleDelete = (item: SampleSubscription) => {
        setSelectedSubscription(item)
        setDeleteModalOpen(true)
    }

    const handleRow = (item: SampleSubscription) => {
        setSelectedSubscription(item)
        setDetailsModalOpen(true)
    }

    const handleSubscriptionChange = async (item: SampleSubscription, status: string) => {
        try {
            await APIService.getInstance().updateSubcriptionStatus(item?.id, { status });
            toast({
                variant: "success",
                description: "Subscription Updated!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error Updating Subscription!",
            })
        }
    }



    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            {/* <SubscriptionDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedSubscription as SampleSubscriptions} /> */}


            <PageHeader title={t(messages.SUBSCRIPTION)}
                description={t(messages.MONITOR_SUBSCRIPTION_PLANS)}
            >
            </PageHeader>

            <SubscriptionsTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} onAppointmentChange={handleSubscriptionChange} />
        </div>
    )
}

export default Subscriptions

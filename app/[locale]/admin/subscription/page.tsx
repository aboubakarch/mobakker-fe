"use client"

import SendNotificationModal from '@/components/modal/SendNotificationModal'
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
    const [notificationModalOpen, setNotificationModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [selectedSubscription, setSelectedSubscription] = useState<undefined | SampleSubscription>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()




    const handleNotificationModalClose = () => {
        setNotificationModalOpen(false);
        setSelectedSubscription(undefined)
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

    const handleNotificationSend = (item: SampleSubscription) => {
        setSelectedSubscription(item)
        setNotificationModalOpen(true)
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            {/* <SubscriptionDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedSubscription as SampleSubscriptions} /> */}

            <SendNotificationModal visible={notificationModalOpen} closeModal={handleNotificationModalClose} val={selectedSubscription ? { id: selectedSubscription.serviceProvider.userId } : undefined} />
            <PageHeader title={t(messages.SUBSCRIPTION)}
                description={t(messages.MONITOR_SUBSCRIPTION_PLANS)}
            >
            </PageHeader>

            <SubscriptionsTable onUpdateFlag={flag} handleRow={handleRow} onAppointmentChange={handleSubscriptionChange} onSendNotification={handleNotificationSend} />
        </div>
    )
}

export default Subscriptions

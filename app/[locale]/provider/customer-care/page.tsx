"use client"
import CustomerCareModal from '@/components/modal/CustomerCareModal'
import DeleteModal from '@/components/modal/DeleteModal'
import EmployeeDetailsModal from '@/components/modal/details/EmployeeDetailsModal'
import CustomerCareTable from '@/components/table/CustomerCareTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CustomerCare = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<undefined | SampleProvider>(undefined)
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedProvider(undefined)

    }
    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedProvider(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedProvider(undefined)
    }


    const handleEdit = (item: SampleProvider) => {
        console.log(item)
        setSelectedProvider(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleProvider) => {
        console.log(item)
        setSelectedProvider(item)
        setDeleteModalOpen(true)
    }
    const handleRow = (item: SampleProvider) => {
        setSelectedProvider(item)
        setDetailsModalOpen(true)
    }
    const onDeleteProvider = async () => {
        setLoading(true)
        try {
            if (selectedProvider) {

                await APIService.getInstance().deleteUser((selectedProvider as any)?.id as any);
            }
            else {
                throw new Error("No Customer Care selected")
            }


            toast({
                variant: "destructive",
                description: "Customer Care Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Customer Care!",
            })

        }
        setLoading(false)

        handleDeleteModalClose()

    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <CustomerCareModal visible={modalOpen} closeModal={handleModalClose} val={selectedProvider} onUpdate={() => setFlag(!flag)} />
            <EmployeeDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedProvider as any} />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteProvider}
                title={messages.CUSTOMER_CARE}
                loading={loading}
            />
            <PageHeader title={t(messages.CUSTOMER_CARE)}
                description={t(messages.CUSTOMER_CARE_SUPPORT)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_REPRESENTATIVE)}</Button>

            </PageHeader>
            <CustomerCareTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
        </div>
    )
}

export default CustomerCare
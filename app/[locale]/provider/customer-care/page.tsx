"use client"
import CustomerCareModal from '@/components/modal/CustomerCareModal'
import DeleteModal from '@/components/modal/DeleteModal'
import CustomerCareTable from '@/components/table/CustomerCareTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CustomerCare = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<undefined | SampleProvider>(undefined)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
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
    const onDeleteProvider = () => {
        toast({
            variant: "destructive",
            description: "Provider Deleted!",
        })
        handleDeleteModalClose()
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <CustomerCareModal visible={modalOpen} closeModal={handleModalClose} val={selectedProvider} />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteProvider}
                title={messages.CUSTOMER_CARE}
            />
            <PageHeader title={t(messages.CUSTOMER_CARE)}
                description={t(messages.CUSTOMER_CARE_SUPPORT)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_REPRESENTATIVE)}</Button>

            </PageHeader>
            <CustomerCareTable handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    )
}

export default CustomerCare
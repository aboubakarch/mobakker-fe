"use client"
import BranchManagerModal from '@/components/modal/BranchManagerModal'
import DeleteModal from '@/components/modal/DeleteModal'
import BranchManagerTable from '@/components/table/BranchManagerTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const BranchManager = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<undefined | SampleProvider>(undefined)
    const [flag, setFlag] = useState(false)
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
            <BranchManagerModal visible={modalOpen} closeModal={handleModalClose} val={selectedProvider} onUpdate={() => setFlag(!flag)} />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteProvider}
                title={messages.BRANCH_MANAGERS}
            />
            <PageHeader title={t(messages.BRANCH_MANAGERS)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_MANAGER)}</Button>

            </PageHeader>
            <BranchManagerTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} />
        </div>
    )
}

export default BranchManager
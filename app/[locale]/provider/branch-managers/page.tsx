"use client"
import BranchManagerModal from '@/components/modal/BranchManagerModal'
import DeleteModal from '@/components/modal/DeleteModal'
import BranchManagerTable from '@/components/table/BranchManagerTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const BranchManager = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<undefined | SampleProvider>(undefined)
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(false)
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
    const onDeleteProvider = async () => {
        setLoading(true)
        try {
            if (selectedProvider) {

                await APIService.getInstance().deleteUser((selectedProvider as any)?.id as any);
            }
            else {
                throw new Error("No Branch Manager selected")
            }


            toast({
                variant: "destructive",
                description: "Branch Manager Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Branch Manager!",
            })

        }
        setLoading(false)

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
                loading={loading}
            />
            <PageHeader title={t(messages.BRANCH_MANAGERS)}
                description={t(messages.MANAGE_BRANCH_LEADERS)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_MANAGER)}</Button>

            </PageHeader>
            <BranchManagerTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} />
        </div>
    )
}

export default BranchManager
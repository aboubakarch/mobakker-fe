"use client"
import BranchModal from '@/components/modal/BranchModal'
import DeleteModal from '@/components/modal/DeleteModal'
import BranchTable from '@/components/table/BranchTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Branch = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState<undefined | SampleBranch>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedBranch(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedBranch(undefined)
    }


    const handleEdit = (item: SampleBranch) => {
        setSelectedBranch(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleBranch) => {
        console.log(item)
        setSelectedBranch(item)
        setDeleteModalOpen(true)
    }
    const onDeleteBranch = async () => {
        try {
            if (selectedBranch) {

                await APIService.getInstance().deleteBranch(selectedBranch?.id);
            }
            else {
                throw new Error("No branch selected")
            }


            toast({
                variant: "destructive",
                description: "Branch Deleted!",
            })
            setFlag(!flag)
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: "Error deleting branch!",
            })

        }
        handleDeleteModalClose()
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <BranchModal visible={modalOpen} closeModal={handleModalClose} val={selectedBranch} onUpdate={() => setFlag(!flag)} />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteBranch}
                title={messages.BRANCH}
            />

            <PageHeader title={t(messages.BRANCH)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_BRANCH)}</Button>

            </PageHeader>
            <BranchTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} />
        </div>
    )
}

export default Branch
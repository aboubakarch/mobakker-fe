"use client"
import AssignServiceModal from '@/components/modal/AssignServiceModal'
import BranchModal from '@/components/modal/BranchModal'
import DeleteModal from '@/components/modal/DeleteModal'
import PaymentModal from '@/components/modal/PaymentModal'
import BranchDetailsModal from '@/components/modal/details/BranchDetailsModal'
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
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [assignModalOpen, setAssignModalOpen] = useState(false);
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState<undefined | SampleBranch>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedBranch(undefined)
    }
    const handleAssignModalClose = () => {
        setAssignModalOpen(false)
        setSelectedBranch(undefined)
    }
    const handlePaymentModalClose = () => {
        setModalOpen(false)
        setPaymentModalOpen(false)
        setSelectedBranch(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedBranch(undefined)
    }
    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedBranch(undefined)
    }


    const handleEdit = (item: SampleBranch) => {
        setSelectedBranch(item)
        setModalOpen(true)
    }

    const handleAssign = (item: SampleBranch) => {
        setSelectedBranch(item)
        setAssignModalOpen(true)
    }
    const handleDelete = (item: SampleBranch) => {
        console.log(item)
        setSelectedBranch(item)
        setDeleteModalOpen(true)
    }
    const handleRow = (item: SampleBranch) => {
        setSelectedBranch(item)
        setDetailsModalOpen(true)
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
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting branch!",
            })

        }
        handleDeleteModalClose()
    }
    const onAddNewBranch = (data: SampleBranch) => {
        console.log("first", data)
        setSelectedBranch(data)
        setPaymentModalOpen(true)
    }
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <BranchModal visible={modalOpen} closeModal={handleModalClose} val={selectedBranch} onUpdate={() => setFlag(!flag)} onSubmitData={onAddNewBranch} />
            <BranchDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedBranch as SampleBranch} />
            <PaymentModal visible={paymentModalOpen} closeModal={handlePaymentModalClose} val={selectedBranch as SampleBranch} />
            <AssignServiceModal
                visible={assignModalOpen} closeModal={handleAssignModalClose} val={selectedBranch} onUpdate={() => setFlag(!flag)}
            />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteBranch}
                title={messages.BRANCH}
            />

            <PageHeader title={t(messages.BRANCH)}
                description={t(messages.MANAGE_BRANCHES)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_BRANCH)}</Button>

            </PageHeader>
            <BranchTable
                handleEdit={handleEdit}
                handleAssign={handleAssign}
                handleDelete={handleDelete}
                onUpdateFlag={flag}
                handleRow={handleRow}
            />
        </div>
    )
}

export default Branch
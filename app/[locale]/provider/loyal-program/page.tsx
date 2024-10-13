"use client"
import DeleteModal from '@/components/modal/DeleteModal'
import LoyaltyProgramModal from '@/components/modal/LoyaltyProgramModal'
import LoyalProgramTable from '@/components/table/LoyalProgramTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LoyalProgram = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProg, setSelectedProg] = useState<undefined | SampleLoyalPrograms>(undefined)

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedProg(undefined)
    }

    const handleModalOpen = () => {
        setModalOpen(true)

    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedProg(undefined)
    }

    const handleEdit = (item: SampleLoyalPrograms) => {
        setSelectedProg(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleLoyalPrograms) => {
        setSelectedProg(item)
        setDeleteModalOpen(true)
    }

    const onDeleteLoyal = async () => {
        try {
            if (selectedProg) {

                await APIService.getInstance().deleteLoyalProgram(selectedProg?.id);
            }
            else {
                throw new Error("No Loyal Program selected")
            }


            toast({
                variant: "destructive",
                description: "Loyal Program Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Loyal Program!",
            })

        }
        handleDeleteModalClose()
    }
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <LoyaltyProgramModal visible={modalOpen} closeModal={handleModalClose} val={selectedProg} onUpdate={() => setFlag(!flag)} />


            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteLoyal}
                title={messages.LOYAL_PROGRAM}
            />

            <PageHeader title={t(messages.LOYAL_PROGRAM)}
                description={t(messages.REWARD_RETAIN_CUSTOMERS)}
            >
                <Button onClick={handleModalOpen} className='bg-indigo-800 hover:bg-indigo-600'>{t("Add Loyal Program")}</Button>

            </PageHeader>
            <LoyalProgramTable
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                onUpdateFlag={flag}
            />
        </div>
    )
}

export default LoyalProgram
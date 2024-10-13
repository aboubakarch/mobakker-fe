"use client"
import DeleteModal from '@/components/modal/DeleteModal'
import PromotionModal from '@/components/modal/PromotionModal'
import PromotionDetailsModal from '@/components/modal/details/PromotionDetailsModal'
import PromotionsTable from '@/components/table/PromotionsTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Promotions = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedPromotion, setSelectedPromotion] = useState<undefined | SamplePromotions>(undefined)
    const [flag, setFlag] = useState(false)

    const { toast } = useToast()

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedPromotion(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedPromotion(undefined)
    }
    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedPromotion(undefined)
    }

    const handleEdit = (item: SamplePromotions) => {
        console.log(item)
        setSelectedPromotion(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SamplePromotions) => {
        console.log(item)
        setSelectedPromotion(item)
        setDeleteModalOpen(true)
    }
    const handleRow = (item: SamplePromotions) => {
        setSelectedPromotion(item)
        setDetailsModalOpen(true)
    }
    const onDeleteBranch = async () => {
        try {
            if (selectedPromotion) {

                await APIService.getInstance().deletePromotion(selectedPromotion?.id);
            }
            else {
                throw new Error("No Promotion selected")
            }


            toast({
                variant: "destructive",
                description: "Promotion Deleted!",
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

    const editTogglePromotion = async (id: string, active: boolean) => {

        await APIService.getInstance().updatePromotionStatus(id, { isActive: active });
        setFlag(!flag)

        toast({
            description: "Promotion Updated!",
            variant: "success"
        })

    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <PromotionModal visible={modalOpen} closeModal={handleModalClose} val={selectedPromotion} onUpdate={() => setFlag(!flag)} />
            <PromotionDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedPromotion as SamplePromotions} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteBranch}
                title={messages.Promotions}
            />

            <PageHeader title={t(messages.Promotions)}
                description={t(messages.DESIGN_TRACK_PROMOTIONS)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_PROMOTION)}</Button>

            </PageHeader>
            <PromotionsTable handleEdit={handleEdit} handleDelete={handleDelete} onToggle={editTogglePromotion} onUpdateFlag={flag} handleRow={handleRow} />
        </div>
    )
}

export default Promotions
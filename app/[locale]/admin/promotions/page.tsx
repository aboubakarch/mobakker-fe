"use client"
import PromotionModal from '@/components/modal/PromotionModal'
import PromotionsTable from '@/components/table/PromotionsTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Promotions = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false)
    }


    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PromotionModal visible={modalOpen} closeModal={handleModalClose} />

            <PageHeader title={t(messages.Promotions)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_PROMOTION)}</Button>

            </PageHeader>
            <PromotionsTable />
        </div>
    )
}

export default Promotions
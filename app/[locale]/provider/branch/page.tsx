"use client"
import BranchModal from '@/components/modal/BranchModal'
import BranchTable from '@/components/table/BranchTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LoyalProgram = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <BranchModal visible={modalOpen} closeModal={handleModalClose} />
            <PageHeader title={t(messages.BRANCH)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_BRANCH)}</Button>

            </PageHeader>
            <BranchTable />
        </div>
    )
}

export default LoyalProgram
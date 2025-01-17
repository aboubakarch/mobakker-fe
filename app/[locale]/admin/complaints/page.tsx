"use client"
import ComplaintTable from '@/components/table/ComplaintTable'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LoyalProgram = () => {
    const { t } = useTranslation()


    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <PageHeader title={t(messages.COMPLAINTS)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
            </PageHeader>
            <ComplaintTable />
        </div>
    )
}

export default LoyalProgram
"use client"
import LoyalProgramTable from '@/components/table/LoyalProgramTable'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LoyalProgram = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.LOYAL_PROGRAM)}
                description={t(messages.REWARD_RETAIN_CUSTOMERS)}
            >
            </PageHeader>
            <LoyalProgramTable />
        </div>
    )
}

export default LoyalProgram
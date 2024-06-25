"use client"

import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Notifaction = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.NOTIFICATIONS)}
                description={t(messages.REALTIME_NOTIFICATIONS)}
            >
            </PageHeader>

        </div>
    )
}

export default Notifaction
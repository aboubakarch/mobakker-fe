"use client"

import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Notifaction = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-3 overflow-auto scrollbar dark:scrollbar-dark">
            <PageHeader title={t(messages.NOTIFICATIONS)}
                description={t(messages.REALTIME_NOTIFICATIONS)}
            >
            </PageHeader>

            <div className='flex bg-background items-center justify-center shadow-lg dark:shadow-white/10  rounded-md h-full'>
                <div className='  flex items-center justify-center flex-col'>
                    <Image src={'/assets/notificationBell.gif'} alt='notification' width={300} height={300} />
                    <h1 className='text-lg font-semibold'>{t(messages.NO_NOTIFICATIONS_RIGHT_NOW)}</h1>
                </div>
            </div>

        </div>
    )
}

export default Notifaction
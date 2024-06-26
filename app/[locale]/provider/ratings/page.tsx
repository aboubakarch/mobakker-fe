"use client"
import AppointmentRatingTable from '@/components/table/AppointmentRatingTable'
import ProviderTable from '@/components/table/ProviderTable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LoyalProgram = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.RATINGS)}
                description={t(messages.MONITOR_CUSTOMER_FEEDBACK)}
            >
            </PageHeader>
            <Tabs defaultValue="appointment" className="w-full">
                <TabsList>
                    <TabsTrigger
                        value="appointment"
                        className='data-[state=active]:bg-indigo-800 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:border-indigo-800 '>
                        {t(messages.RATING_APPOINTMENT)}
                    </TabsTrigger>
                    <TabsTrigger
                        value="employee"
                        className='data-[state=active]:bg-indigo-800 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:border-indigo-800 '>
                        {t(messages.RATING_EMPLOYEE)}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="appointment">
                    <AppointmentRatingTable />

                </TabsContent>
                <TabsContent value="employee">
                    <ProviderTable />

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default LoyalProgram
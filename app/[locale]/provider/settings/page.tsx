"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { TFunction } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

const SettingsData = (t: TFunction<"translation", undefined>) => ([
    {
        id: "cancelAppointment",
        tab: t(messages.CANCEL_APP_APPOINTMENTS),
        component: <div>{t(messages.CANCEL_APP_APPOINTMENTS)}</div>
    },
    {
        id: "blockUser",
        tab: t(messages.BLOCK_USER),
        component: <div>{t(messages.BLOCK_USER)}</div>
    },
    {
        id: "languages",
        tab: t(messages.LANGUAGES),
        component: <div>{t(messages.LANGUAGES)}</div>
    },
    {
        id: "techSupport",
        tab: t(messages.TECHNICAL_SUPPORT),
        component: <div>{t(messages.TECHNICAL_SUPPORT)}</div>
    },
    {
        id: "branchCert",
        tab: t(messages.BRANCH_CERTIFICATES),
        component: <div>{t(messages.BRANCH_CERTIFICATES)}</div>
    },
    {
        id: "notif",
        tab: t(messages.NOTIFICATION),
        component: <div>{t(messages.NOTIFICATION)}</div>
    },
    {
        id: "integration",
        tab: t(messages.INTEGRATION),
        component: <div>{t(messages.INTEGRATION)}</div>
    },
    {
        id: "ads",
        tab: t(messages.ADVERTISEMENT),
        component: <div>{t(messages.ADVERTISEMENT)}</div>
    },
    {
        id: "createUser",
        tab: t(messages.CREATE_USER),
        component: <div>{t(messages.CREATE_USER)}</div>
    },
])


const Settings = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <PageHeader title={t(messages.SETTINGS)}
                description={t(messages.CUSTOMIZE_DASHBOARD)}
            >

            </PageHeader>

            <Tabs defaultValue={SettingsData(t)[0].id} className="w-full bg-background">

                <TabsList className='bg-background'>
                    {SettingsData(t).map(item => (
                        <TabsTrigger
                            key={item.id}
                            value={item.id}
                            className='bg-background data-[state=active]:bg-indigo-800 data-[state=active]:bg-opacity-10 data-[state=active]:text-indigo-800 '>
                            {item.tab}
                        </TabsTrigger>
                    ))}

                </TabsList>

                {SettingsData(t).map(item => (
                    <TabsContent value={item.id} key={item.id} >
                        {item.component}
                    </TabsContent>
                ))}
            </Tabs>

        </div >
    )
}

export default Settings
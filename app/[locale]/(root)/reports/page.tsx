"use client"

import ReportWidget from '@/components/header/ReportWidget'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { ReportTypesEnum } from '@/constants/enums'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Report = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.REPORTS)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
            </PageHeader>


            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-row-1 gap-3">
                {Object.values(ReportTypesEnum).map(report => (
                    <ReportWidget type={report} key={report} />
                ))}

            </div>


        </div>
    )
}

export default Report
"use client"

import HeaderInfoItem from '@/components/header/HeaderInfoItem'
import PerformanceChart from '@/components/header/PerformanceChart'
import ReportWidget from '@/components/header/ReportWidget'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { ColorsEnum, ReportTypesEnum } from '@/constants/enums'
import APIService from '@/services/api'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
interface IAppointmentState {
    COMPLETED?: number;
    PENDING?: number;
    STARTED?: number;
    REJECTED?: number;
    CANCELED?: number;
}
const Report = () => {
    const { t } = useTranslation()
    const [totalAppointments, setTotalAppointments] = useState<IAppointmentState | undefined | null>(undefined)
    const [totalAppointmentsCount, setTotalAppointmentsCount] = useState(0)
    const getTotalAppointments = async () => {
        try {
            let param: any = {}

            const data = await APIService.getInstance().getTotalAppointments(param)
            setTotalAppointments({
                CANCELED: data.CANCELED || 0,
                COMPLETED: data.COMPLETED || 0,
                PENDING: data.PENDING || 0,
                REJECTED: data.REJECTED || 0,
                STARTED: data.STARTED || 0,
            })
            setTotalAppointmentsCount(Object.values(data).reduce((acc: number, value: any) => acc + (value || 0), 0))

        } catch (error) {
            setTotalAppointments(null)
            console.log(error)
        }
    }
    useEffect(() => {
        getTotalAppointments()
    }, [])

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <PageHeader title={t(messages.REPORTS)}
                description={t(messages.DETAILED_INSIGHTS)}
            >
            </PageHeader>

            <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-row-1 gap-3">
                <PerformanceChart />


                <div className="bg-indigo-800/5 rounded-sm col-span-1 grid grid-cols-1 grid-rows-5 gap-3 p-3">
                    <HeaderInfoItem title={t(messages.TOTAL_REQ)} color={ColorsEnum.Blue} heading={totalAppointmentsCount} className="bg-background" />
                    <HeaderInfoItem title={t(messages.COMPLETE)} color={ColorsEnum.Green} heading={totalAppointments?.COMPLETED || 0} className="bg-background" />
                    <HeaderInfoItem title={t("Pending")} color={ColorsEnum.Yellow} heading={totalAppointments?.PENDING || 0} className="bg-background" />
                    <HeaderInfoItem title={t(messages.CANCELLED)} color={ColorsEnum.Red} heading={totalAppointments?.CANCELED || 0} className="bg-background" />
                    <HeaderInfoItem title={t("Rejected")} color={ColorsEnum.Red} heading={totalAppointments?.REJECTED || 0} className="bg-background" />
                </div>

            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 md:grid-row-1 gap-3">
                {Object.values(ReportTypesEnum).map(report => (
                    <ReportWidget type={report} key={report} />
                ))}

            </div>


        </div>
    )
}

export default Report
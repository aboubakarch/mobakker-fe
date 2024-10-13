"use client"
import { messages } from '@/constants/constants'
import React, { useEffect, useState } from 'react'
import LineChart from '../charts/LineChart'
import { Button } from '../ui'
import { ExportIcon } from '@/svgs'
import { useTranslation } from 'react-i18next'
import ReportWidgetButton from '../buttons/ReportWidgetButton'
import { ReportTypesEnum } from '@/constants/enums'
import { getAllMonths, getMonthMap } from '@/lib/helpers'
import APIService from '@/services/api'
import moment from 'moment'

const PerformanceChart = () => {
    const { t } = useTranslation()
    const [month, setMonth] = useState(getAllMonths()[new Date().getMonth()]);
    const [year, setYear] = useState(new Date().getFullYear());
    const [data, setData] = useState<StackedBarChartProps | undefined | null>(undefined)

    const getYearlyAppointments = async () => {
        try {
            const monthIndex = getMonthMap()[month] || 0;

            const data = await APIService.getInstance().getDailyAppointments({
                selectedMonth: monthIndex + 1,
                selectedYear: year
            })
            // console.log(data)
            setData(data)

        } catch (error) {
            setData(null)
            console.log(error)
        }
    }
    useEffect(() => {
        getYearlyAppointments()
    }, [year, month])



    return (
        <div className="bg-background rounded-sm md:col-span-3 flex flex-col gap-2 p-3">
            <div className="flex justify-between ">
                <div >
                    <p className="text-gray-900 dark:text-white text-lg font-medium leading-[30px]">{t("Monhly Performance")}</p>
                    <p className="text-gray-500 dark:text-white text-sm font-normal leading-normal">{`${month}, ${year}`}</p>
                </div>


                <div className="flex gap-3">
                    {/* <Button variant={"default"} className="bg-indigo-800  bg-opacity-5 hover:bg-indigo-300  rounded-md justify-center items-center gap-2 inline-flex">
                        <ExportIcon />
                        <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{t(messages.EXPORT)}</p>
                    </Button> */}

                    <ReportWidgetButton
                        onDateChange={() => { }}
                        selectedDate={undefined}
                        selected={month}
                        onChangeSelected={(select) => setMonth(select as string)}
                        type={ReportTypesEnum.Month} />
                    <ReportWidgetButton
                        onDateChange={() => { }}
                        selectedDate={undefined}
                        selected={year}
                        onChangeSelected={(select) => setYear(select as number)}
                        type={ReportTypesEnum.Year} />
                </div>
            </div>

            <div className="h-full w-full">
                <LineChart data={(data as any) || undefined} />
            </div>
        </div>
    )
}

export default PerformanceChart
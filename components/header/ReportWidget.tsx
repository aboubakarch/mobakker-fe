
"use client"
import React, { FC, useEffect, useState } from 'react'
import { Button } from '../ui'
import { ExportIcon } from '@/svgs'
import { messages } from '@/constants/constants'
import { IReportWidgetProps } from '@/@types/dashboard'
import { cn } from '@/lib/utils'
import ReportWidgetButton from '../buttons/ReportWidgetButton'
import { ReportTypesEnum } from '@/constants/enums'
import { useTranslation } from 'react-i18next'
import { getAllMonths, getMonthMap } from '@/lib/helpers'
import APIService from '@/services/api'
import moment from 'moment'
interface IAppointmentState {
    COMPLETED?: number;
    PENDING?: number;
    STARTED?: number;
    REJECTED?: number;
    CANCELED?: number;
}
const ReportWidget: FC<IReportWidgetProps> = ({ className = "", type }) => {
    const { t } = useTranslation()

    const [date, setDate] = useState<Date>(new Date());
    const [month, setMonth] = useState(getAllMonths()[new Date().getMonth()]);
    const [year, setYear] = useState(new Date().getFullYear());

    const [totalAppointments, setTotalAppointments] = useState<IAppointmentState | undefined | null>(undefined)
    const [totalAppointmentsCount, setTotalAppointmentsCount] = useState(0)

    const getTotalAppointments = async () => {
        try {
            let param: any = {}
            if (type === ReportTypesEnum.Day) {
                param = { day: moment(date).format("YYYY-MM-DD") }
            }
            else if (type === ReportTypesEnum.Month) {
                const monthIndex = getMonthMap()[month] || 0;
                const monthtemp = moment().month(monthIndex).format("YYYY-MM-DD")
                param = { month: monthtemp }
            }
            else if (type === ReportTypesEnum.Year) {
                const yeartemp = moment().year(year).format("YYYY-MM-DD")
                param = { year: yeartemp }
            }
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
    }, [date, month, year])



    const onDateChange = (day: Date | undefined) => {
        if (day === undefined) {
            setDate(new Date())
            return
        }
        setDate(day)
    }
    const onChangeSelected = (select: number | string) => {
        switch (type) {
            case ReportTypesEnum.Month:
                setMonth(select as string)
                break
            case ReportTypesEnum.Year:
                setYear(select as number)
        }
    }



    return (
        <div className={cn('w-full h-full flex flex-col p-4 gap-3 bg-white', className)}>
            <p className='text-gray-900 text-lg font-medium leading-[30px]'>
                {`${type} ${t(messages.REPORTS)}`}
            </p>
            <div className="flex gap-3 w-full justify-end">
                {/* <Button variant={"default"} className="bg-indigo-800  bg-opacity-5 hover:bg-indigo-300  rounded-md justify-center items-center gap-2 inline-flex">
                    <ExportIcon />
                    <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{t(messages.EXPORT)}</p>
                </Button> */}
                <ReportWidgetButton
                    onDateChange={onDateChange}
                    selectedDate={date}
                    selected={type === ReportTypesEnum.Month ? month : year}
                    onChangeSelected={onChangeSelected}
                    type={type} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <div className="w-full px-4 py-3 flex justify-between bg-indigo-800 bg-opacity-5 rounded">
                    <div className=" text-gray-900 text-sm font-medium leading-snug">{t(messages.TOTAL_REQ)}</div>
                    <div className="text-right text-gray-500 text-sm font-medium leading-snug">{totalAppointmentsCount}</div>
                </div>
                <div className="w-full px-4 py-3 flex justify-between bg-indigo-800 bg-opacity-5 rounded">
                    <div className=" text-gray-900 text-sm font-medium leading-snug">{t(messages.COMPLETE)}</div>
                    <div className="text-right text-gray-500 text-sm font-medium leading-snug">{totalAppointments?.COMPLETED || 0}</div>
                </div>
                <div className="w-full px-4 py-3 flex justify-between bg-red-500 bg-opacity-5 rounded">
                    <div className=" text-red-500 text-sm font-medium leading-snug">{t(messages.CANCELLED)}</div>
                    <div className="text-right text-red-500 text-sm font-medium leading-snug">{totalAppointments?.CANCELED || 0}</div>
                </div>
                <div className="w-full px-4 py-3 flex justify-between bg-indigo-800 bg-opacity-5 rounded">
                    <div className=" text-gray-900 text-sm font-medium leading-snug">{t("Pending")}</div>
                    <div className="text-right text-gray-500 text-sm font-medium leading-snug">{totalAppointments?.PENDING || 0}</div>
                </div>

            </div>
        </div >
    )
}

export default ReportWidget
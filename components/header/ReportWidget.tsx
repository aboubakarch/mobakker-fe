
"use client"
import React, { FC, useState } from 'react'
import { Button } from '../ui'
import { ExportIcon } from '@/svgs'
import { messages } from '@/constants/constants'
import { IReportWidgetProps } from '@/@types/dashboard'
import { cn } from '@/lib/utils'
import ReportWidgetButton from '../buttons/ReportWidgetButton'
import { ReportTypesEnum } from '@/constants/enums'

const ReportWidget: FC<IReportWidgetProps> = ({ className = "", type }) => {

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [month, setMonth] = useState("");
    const [year, setYear] = useState(2024);

    const onDateChange = (day: Date | undefined) => {
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
                {`${type} ${messages.REPORTS}`}
            </p>
            <div className="flex gap-3 w-full justify-end">
                <Button variant={"default"} className="bg-indigo-800  bg-opacity-5 hover:bg-indigo-300  rounded-md justify-center items-center gap-2 inline-flex">
                    <ExportIcon />
                    <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{messages.EXPORT}</p>
                </Button>
                <ReportWidgetButton
                    onDateChange={onDateChange}
                    selectedDate={date}
                    selected={type === ReportTypesEnum.Month ? month : year}
                    onChangeSelected={onChangeSelected}
                    type={type} />
            </div>
            <div className='w-full flex flex-col gap-3 '>
                <div className="w-full px-4 py-3 flex justify-between bg-indigo-800 bg-opacity-5 rounded">
                    <div className=" text-gray-900 text-sm font-medium leading-snug">{messages.TOTAL_REQ}</div>
                    <div className="text-right text-gray-500 text-sm font-medium leading-snug">4234</div>
                </div>
                <div className="w-full px-4 py-3 flex justify-between bg-indigo-800 bg-opacity-5 rounded">
                    <div className=" text-gray-900 text-sm font-medium leading-snug">{messages.COMPLETE}</div>
                    <div className="text-right text-gray-500 text-sm font-medium leading-snug">4234</div>
                </div>
                <div className="w-full px-4 py-3 flex justify-between bg-red-500 bg-opacity-5 rounded">
                    <div className=" text-red-500 text-sm font-medium leading-snug">{messages.CANCELLED}</div>
                    <div className="text-right text-red-500 text-sm font-medium leading-snug">4234</div>
                </div>
                <div className="w-full px-4 py-3 flex justify-between bg-indigo-800 bg-opacity-5 rounded">
                    <div className=" text-gray-900 text-sm font-medium leading-snug">{messages.ENTERED_MAN}</div>
                    <div className="text-right text-gray-500 text-sm font-medium leading-snug">4234</div>
                </div>

            </div>
        </div >
    )
}

export default ReportWidget
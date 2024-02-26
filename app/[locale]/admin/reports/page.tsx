"use client"
import HeaderInfoItem from '@/components/header/HeaderInfoItem'
import PerformanceChart from '@/components/header/PerformanceChart'
import ReportWidget from '@/components/header/ReportWidget'
import { messages } from '@/constants/constants'
import { ColorsEnum, ReportTypesEnum } from '@/constants/enums'
import React from 'react'

const Report = () => {
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <div className="md:w-1/2 w-full flex flex-col">
                <h1 className="font-medium text-2xl ">{messages.REPORTS}</h1>
                <p className="line-clamp-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, asperiores rerum? Earum quod, maxime fugiat dolore laborum, illo minima aperiam amet ipsam, architecto voluptatum fugit laudantium aliquid quisquam reprehenderit natus.</p>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-4 md:grid-row-1 gap-3">
                <PerformanceChart />


                <div className="bg-indigo-800/5 rounded-sm col-span-1 grid grid-cols-1 grid-rows-5 gap-3 p-3">
                    <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Blue} heading={43} className="bg-white" />
                    <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Green} heading={100} percentage={67} showIcon hasGraph className="bg-white" />
                    <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Red} heading={342} className="bg-white" />
                    <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Yellow} heading={32} className="bg-white" />
                    <HeaderInfoItem title="Lorem Ipsum" color={ColorsEnum.Green} heading={75} percentage={96} showIcon className="bg-white" />
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
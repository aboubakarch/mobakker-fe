import { messages } from '@/constants/constants'
import React from 'react'
import LineChart from '../charts/LineChart'
import { Button } from '../ui'
import { ExportIcon } from '@/svgs'

const PerformanceChart = () => {
    return (
        <div className="bg-white rounded-sm md:col-span-3 flex flex-col gap-2 p-3">
            <div className="flex justify-between ">
                <div >
                    <p className="text-gray-900 text-lg font-medium leading-[30px]">{messages.TODAYS_PERFORMANCE}</p>
                    <p className="text-gray-500 text-sm font-normal leading-normal">25 Jan 2023, 09:41 PM</p>
                </div>


                <div className="flex gap-3">
                    <Button variant={"default"} className="bg-indigo-800  bg-opacity-5 hover:bg-indigo-300  rounded-md justify-center items-center gap-2 inline-flex">
                        <ExportIcon />
                        <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{messages.EXPORT}</p>
                    </Button>
                    <Button variant={"default"} className="bg-indigo-800 hover:bg-indigo-600 rounded-md justify-center items-center gap-2 inline-flex">
                        <p className="text-center text-white text-sm font-normal leading-normal">{messages.APPLY_FILTER}</p>
                    </Button>
                </div>
            </div>

            <div className="h-full w-full">
                <LineChart />
            </div>
        </div>
    )
}

export default PerformanceChart
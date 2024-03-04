"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { promotionsColumns } from './columns/PromotionsColumns'

const PromotionsTable = () => {
    const data: SamplePromotions[] = [
        {
            promotionName: 'Ramzan Offer',
            serviceName: "Full Body Massage",
            serviceType: "Massage",
            availableCount: 12,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            capacity: "45 minutes",
            status: false,
            startDate: "31-jan-2023",
            endDate: "31-jan-2023",
        },
        {
            promotionName: 'Ramzan Offer',
            serviceName: "Full Body Massage",
            serviceType: "Massage",
            availableCount: 12,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            capacity: "45 minutes",
            status: false,
            startDate: "31-jan-2023",
            endDate: "31-jan-2023",
        },
        {
            promotionName: 'Ramzan Offer',
            serviceName: "Full Body Massage",
            serviceType: "Massage",
            availableCount: 12,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            capacity: "45 minutes",
            status: true,
            startDate: "31-jan-2023",
            endDate: "31-jan-2023",
        },
        {
            promotionName: 'Ramzan Offer',
            serviceName: "Full Body Massage",
            serviceType: "Massage",
            availableCount: 12,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            capacity: "45 minutes",
            status: false,
            startDate: "31-jan-2023",
            endDate: "31-jan-2023",
        },

    ]

    return (
        <div>
            <DataTable data={data} columns={promotionsColumns} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default PromotionsTable
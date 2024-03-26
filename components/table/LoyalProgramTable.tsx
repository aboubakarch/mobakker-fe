"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { loyalProgramsColumns } from './columns/LoyalProgramsColumn'
import { useTranslation } from 'react-i18next'

const LoyalProgramTable = () => {
    const { t } = useTranslation()

    const data: SampleLoyalPrograms[] = [
        {
            rank: "#1",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            rating: 3.5,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            lastBooking: "12-12-2023",
            totalBookings: 15
        },
        {
            rank: "#2",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            rating: 3.5,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            lastBooking: "12-12-2023",
            totalBookings: 15
        },
        {
            rank: "#3",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            rating: 3.5,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            lastBooking: "12-12-2023",
            totalBookings: 15
        },
        {
            rank: "#4",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            rating: 3.5,
            servicePicture: "/assets/sampleImage.jpg",
            branchName: "Median",
            lastBooking: "12-12-2023",
            totalBookings: 15
        },

    ]

    return (
        <div>
            <DataTable data={data} columns={loyalProgramsColumns(t)} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default LoyalProgramTable
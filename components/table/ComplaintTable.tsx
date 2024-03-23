"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { complaintColumns } from './columns/ComplaintColumn'
import { useTranslation } from 'react-i18next'

const ComplaintTable = () => {
    const { t } = useTranslation()

    const data: SampleComplaint[] = [
        {
            complaint: "1",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            customerType: "Provider",
            city: "Median",
            attachment: true,
            bookingId: "2342342",
            complainMessage: "Functionality issue in my web app"
        },
        {
            complaint: "1",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            customerType: "Provider",
            city: "Median",
            attachment: true,
            bookingId: "2342342",
            complainMessage: "Functionality issue in my web app"
        },
        {
            complaint: "1",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            customerType: "Provider",
            city: "Median",
            attachment: true,
            bookingId: "2342342",
            complainMessage: "Functionality issue in my web app"
        },
        {
            complaint: "1",
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            customerType: "Provider",
            city: "Median",
            attachment: true,
            bookingId: "2342342",
            complainMessage: "Functionality issue in my web app"
        },


    ]

    return (
        <div>
            <DataTable data={data} columns={complaintColumns(t)} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default ComplaintTable
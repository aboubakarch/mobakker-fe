"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { appointmentsColumns } from './columns/AppointmentsColumn'

const AppointmentsTable = () => {
    const data: SampleAppointments[] = [
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            time: "9-10pm",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median"
        },
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            time: "9-10pm",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median"
        },
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            time: "9-10pm",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median"
        },
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            time: "9-10pm",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median"
        },

    ]

    return (
        <div>
            <DataTable data={data} columns={appointmentsColumns} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default AppointmentsTable
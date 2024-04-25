"use client"
import React, { FC } from 'react'
import { DataTable } from './DataTable'
import { appointmentsColumns } from './columns/AppointmentsColumn'
import { useTranslation } from 'react-i18next'

const AppointmentsTable: FC<ITableProps<SampleAppointments>> = ({ handleDelete, handleEdit }) => {
    const { t } = useTranslation()

    const data: SampleAppointments[] = [
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median",
            hours: ["9-10pm"],
            category: "test3",
            date: new Date(),
            employees: [],
            paymentType: "test2",
            repeatDay: true,
            repeatMonth: false,
            repeatWeek: false,

        },
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median",
            hours: ["9-10pm"],
            category: "test3",
            date: new Date(),
            employees: [],
            paymentType: "test2",
            repeatDay: true,
            repeatMonth: false,
            repeatWeek: false,

        },
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median",
            hours: ["9-10pm"],
            category: "test3",
            date: new Date(),
            employees: [],
            paymentType: "test2",
            repeatDay: true,
            repeatMonth: false,
            repeatWeek: false,

        },
        {
            bookingId: "#123445",
            customerNumber: 5637572384,
            name: 'Abdullah Ali Al-Raddadi',
            serviceBooked: "Full Body Massage",
            serviceType: "Massage",
            servicePicture: "/assets/sampleImage.jpg",
            serviceTime: "45 minutes",
            price: 160,
            branchName: "Median",
            hours: ["9-10pm"],
            category: "test3",
            date: new Date(),
            employees: [],
            paymentType: "test2",
            repeatDay: true,
            repeatMonth: false,
            repeatWeek: false,

        },

    ]

    return (
        <div>
            <DataTable data={data} columns={appointmentsColumns(t, handleEdit, handleDelete)} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default AppointmentsTable
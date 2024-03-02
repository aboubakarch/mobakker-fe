"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { serviceColumns } from './columns/ServicesColumns'

const ServicesTable = () => {
    const data: SampleServices[] = [
        {
            name: 'Full Body Massage',
            details: "45 minutes fully body massage include feet, hand an nick with a Thailand",
            serviceType: "Massage",
            workingHours: "9-10pm",
            employeeCount: 11,
            servicePicture: "/assets/sampleImage.jpg",
            timeSlot: "45 minutes",
            price: 160
        },
        {
            name: 'Full Body Massage',
            details: "45 minutes fully body massage include feet, hand an nick with a Thailand",
            serviceType: "Massage",
            workingHours: "9-10pm",
            employeeCount: 11,
            servicePicture: "/assets/sampleImage.jpg",
            timeSlot: "45 minutes",
            price: 160
        },
        {
            name: 'Full Body Massage',
            details: "45 minutes fully body massage include feet, hand an nick with a Thailand",
            serviceType: "Massage",
            workingHours: "9-10pm",
            employeeCount: 11,
            servicePicture: "/assets/sampleImage.jpg",
            timeSlot: "45 minutes",
            price: 160
        },
        {
            name: 'Full Body Massage',
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum praesentium expedita odit distinctio. Veritatis debitis itaque tempore quos vel! Quisquam ad totam culpa, tempora obcaecati dolor perspiciatis laudantium porro corporis!",
            serviceType: "Massage",
            workingHours: "9-10pm",
            employeeCount: 11,
            servicePicture: "/assets/sampleImage.jpg",
            timeSlot: "45 minutes",
            price: 160
        },

    ]

    return (
        <div>
            <DataTable data={data} columns={serviceColumns} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default ServicesTable
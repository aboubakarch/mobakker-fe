"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { employeeColumns } from './columns/EmployeeColumns'

const EmployeeTable = () => {
    const data: SampleEmployee[] = [
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: ["9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm"],
            workingHours: "9-10pm",
            rating: 3.5,
            profilePicture: "/assets/sampleImage.jpg",
            status: "Available"
        },
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: ["9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm"],
            workingHours: "9-10pm",
            rating: 3.5,
            profilePicture: "/assets/sampleImage.jpg",
            status: "Booked"


        },
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: ["9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm"],
            workingHours: "9-10pm",
            rating: 3.5,
            profilePicture: "/assets/sampleImage.jpg",
            status: "Working"


        },
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: ["9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm", "9-10pm"],
            workingHours: "9-10pm",
            rating: 3.5,
            profilePicture: "/assets/sampleImage.jpg",
            status: "Booked"

        },
    ]

    return (
        <div>
            <DataTable data={data} columns={employeeColumns} filterKey='name' count={data.length} rowStyle='bg-white' tableStyle='border-x-0' />
        </div>
    )
}

export default EmployeeTable
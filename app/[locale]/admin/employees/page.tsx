"use client"
import { DataTable } from '@/components/table/DataTable';
import { Button } from '@/components/ui'
import { messages } from '@/constants/constants'
import React from 'react'
import { columns } from './columns';

const Employees = () => {

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
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <div className='w-full flex justify-between'>

                <div className="md:w-1/2 w-full flex flex-col">
                    <h1 className="font-medium text-2xl ">{messages.EMPLOYEES}</h1>
                    <p className="line-clamp-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, asperiores rerum? Earum quod, maxime fugiat dolore laborum, illo minima aperiam amet ipsam, architecto voluptatum fugit laudantium aliquid quisquam reprehenderit natus.</p>
                </div>
                <Button className='bg-indigo-800 hover:bg-indigo-600'>Add Employee</Button>
            </div>


            <div>
                <DataTable data={data} columns={columns} filterKey='name' count={4} />
            </div>

        </div>
    )
}

export default Employees
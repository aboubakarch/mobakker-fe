import { DataTable } from '@/components/table/DataTable';
import { Button } from '@/components/ui'
import { messages } from '@/constants/constants'
import { ColumnDef } from '@tanstack/react-table';
import React from 'react'

const Employees = () => {
    interface Sample {
        name: string;
        jobDesc: string;
        bookedToday: string;
        workingHours: string;
        rating: number;
    }
    const data: Sample[] = [
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: "9-10pm",
            workingHours: "9-10pm",
            rating: 3.5
        },
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: "9-10pm",
            workingHours: "9-10pm",
            rating: 3.5
        },
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: "9-10pm",
            workingHours: "9-10pm",
            rating: 3.5
        },
        {
            name: 'Zaire',
            jobDesc: "Washer",
            bookedToday: "9-10pm",
            workingHours: "9-10pm",
            rating: 3.5
        },
    ]

    const columns: ColumnDef<Sample>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "jobDesc",
            header: "Job Description",
        },
        {
            accessorKey: "bookedToday",
            header: "Booked Today",
        },
        {
            accessorKey: "workingHours",
            header: "Working Hours",
        },
        {
            accessorKey: "rating",
            header: "Rating",
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
                <DataTable data={data} columns={columns} filterKey='name' />
            </div>

        </div>
    )
}

export default Employees
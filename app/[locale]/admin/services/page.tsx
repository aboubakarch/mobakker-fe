import ServicesTable from '@/components/table/ServicesTable'
import { Button } from '@/components/ui'
import { messages } from '@/constants/constants'
import React from 'react'

const Employees = () => {

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <div className='w-full flex justify-between'>

                <div className="md:w-1/2 w-full flex flex-col">
                    <h1 className="font-medium text-2xl ">{messages.SERVICES}</h1>
                    <p className="line-clamp-2 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, asperiores rerum? Earum quod, maxime fugiat dolore laborum, illo minima aperiam amet ipsam, architecto voluptatum fugit laudantium aliquid quisquam reprehenderit natus.</p>
                </div>
                <Button className='bg-indigo-800 hover:bg-indigo-600'>Add Services</Button>
            </div>



            <ServicesTable />
        </div>
    )
}

export default Employees
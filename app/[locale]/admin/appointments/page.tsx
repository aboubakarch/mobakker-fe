import AppointmentsTable from '@/components/table/AppointmentsTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'

const Employees = () => {

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={messages.APPOINTMENTS}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button className='bg-indigo-800 hover:bg-indigo-600'>{messages.ADD_APPOINTMENTS}</Button>
            </PageHeader>



            <AppointmentsTable />
        </div>
    )
}

export default Employees
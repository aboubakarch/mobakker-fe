"use client"
import EmployeeTable from '@/components/table/EmployeeTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Employees = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.EMPLOYEES)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_EMPLOYEES)}</Button>
            </PageHeader>


            <EmployeeTable />

        </div>
    )
}

export default Employees
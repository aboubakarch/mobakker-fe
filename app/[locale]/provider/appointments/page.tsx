"use client"
import AppointmentModal from '@/components/modal/AppointmentModal'
import AppointmentsTable from '@/components/table/AppointmentsTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Employees = () => {

    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalClose = () => {
        setModalOpen(false)
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <AppointmentModal visible={modalOpen} closeModal={handleModalClose} />
            <PageHeader title={t(messages.APPOINTMENTS)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_APPOINTMENTS)}</Button>
            </PageHeader>



            <AppointmentsTable />
        </div>
    )
}

export default Employees
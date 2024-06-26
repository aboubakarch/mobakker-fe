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
                description={t(messages.TRACK_APPOINTMENTS)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_APPOINTMENTS)}</Button>
            </PageHeader>



            <AppointmentsTable />
        </div>
    )
}

export default Employees
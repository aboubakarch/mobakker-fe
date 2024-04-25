"use client"
import AppointmentModal from '@/components/modal/AppointmentModal'
import DeleteModal from '@/components/modal/DeleteModal'
import AppointmentsTable from '@/components/table/AppointmentsTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Employees = () => {

    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState<undefined | SampleAppointments>(undefined)
    const { toast } = useToast()

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedAppointment(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedAppointment(undefined)
    }


    const handleEdit = (item: SampleAppointments) => {
        console.log(item)
        setSelectedAppointment(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleAppointments) => {
        console.log(item)
        setSelectedAppointment(item)
        setDeleteModalOpen(true)
    }
    const onDeleteAppointment = () => {
        toast({
            variant: "destructive",
            description: "Appoointment Deleted!",
        })
        handleDeleteModalClose()
    }


    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <AppointmentModal visible={modalOpen} closeModal={handleModalClose} val={selectedAppointment} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteAppointment}
                title={messages.APPOINTMENTS}
            />

            <PageHeader title={t(messages.APPOINTMENTS)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_APPOINTMENTS)}</Button>
            </PageHeader>



            <AppointmentsTable handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
    )
}

export default Employees
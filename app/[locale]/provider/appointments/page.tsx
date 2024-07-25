"use client"
import AppointmentModal from '@/components/modal/AppointmentModal'
import DeleteModal from '@/components/modal/DeleteModal'
import AppointmentDetailsModal from '@/components/modal/details/AppointmentDetailsModal'
import AppointmentsTable from '@/components/table/AppointmentsTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Appointments = () => {

    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState<undefined | SampleAppointments>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedAppointment(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedAppointment(undefined)
    }

    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedAppointment(undefined)
    }

    const handleEdit = (item: SampleAppointments) => {
        setSelectedAppointment(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleAppointments) => {
        setSelectedAppointment(item)
        setDeleteModalOpen(true)
    }
    const handleRow = (item: SampleAppointments) => {
        setSelectedAppointment(item)
        setDetailsModalOpen(true)
    }
    const handleAppointmentChange = async (item: SampleAppointments, status: string) => {
        try {

            await APIService.getInstance().editAppointment(item?.id, { status });
            toast({
                variant: "destructive",
                description: "Appointment Updated!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error Updating Appointment!",
            })

        }
    }
    const onDeleteAppointment = async () => {
        try {
            if (selectedAppointment) {

                await APIService.getInstance().deleteAppointment(selectedAppointment?.id);
            }
            else {
                throw new Error("No Appointment selected")
            }


            toast({
                variant: "destructive",
                description: "Appointment Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Appointment!",
            })

        }
        handleDeleteModalClose()
    }


    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <AppointmentModal visible={modalOpen} closeModal={handleModalClose} val={selectedAppointment} onUpdate={() => setFlag(!flag)} />
            <AppointmentDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedAppointment as SampleAppointments} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteAppointment}
                title={messages.APPOINTMENTS}
            />
            <PageHeader title={t(messages.APPOINTMENTS)}
                description={t(messages.TRACK_APPOINTMENTS)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_APPOINTMENTS)}</Button>
            </PageHeader>



            <AppointmentsTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} onAppointmentChange={handleAppointmentChange} />
        </div>
    )
}

export default Appointments
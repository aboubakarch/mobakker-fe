"use client"
import AppointmentModal from '@/components/modal/AppointmentModal'
import CancelAppointmentModal from '@/components/modal/CancelAppointmentModal'
import DeleteModal from '@/components/modal/DeleteModal'
import AppointmentDetailsModal from '@/components/modal/details/AppointmentDetailsModal'
import RatingModal from '@/components/modal/RatingModal'
import RefundModal from '@/components/modal/RefundModal'
import SendNotificationModal from '@/components/modal/SendNotificationModal'
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
    const [notificationModalOpen, setNotificationModalOpen] = useState(false);
    const [ratingModalOpen, setRatingModalOpen] = useState(false);
    const [cancelModalOpen, setCancelModalOpen] = useState(false);
    const [refundModalOpen, setRefundModalOpen] = useState(false);


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
    const handleRefund = (item: SampleAppointments) => {
        setSelectedAppointment(item)
        setRefundModalOpen(true)
    }
    const handleAppointmentChange = async (item: SampleAppointments, status: string) => {
        try {

            if (status === "CANCELED") {
                setSelectedAppointment(item)

                setCancelModalOpen(true)
                return
            }
            if (status === "COMPLETED" && item.paymentStatus !== "APPROVED" || item.paymentStatus !== "PAID") {
                toast({
                    variant: "destructive",
                    description: "Please Complete the payment first!",
                })
                return;
            }

            await APIService.getInstance().editAppointment(item?.id, { status });
            toast({
                variant: "success",
                description: "Appointment Updated!",
            })
            if (status === "COMPLETED") {
                setSelectedAppointment(item)

                setRatingModalOpen(true)

            } else {

                setFlag(!flag)
            }
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

    const handleNotificationModalClose = () => {
        setNotificationModalOpen(false);
        setSelectedAppointment(undefined)
    }
    const handleRatingModalClose = () => {
        setRatingModalOpen(false);
        setSelectedAppointment(undefined)
    }
    const handleCancelModalClose = () => {
        setCancelModalOpen(false);
        setSelectedAppointment(undefined)
    }
    const handleRefundModalClose = () => {
        setRefundModalOpen(false);
        setSelectedAppointment(undefined)
    }
    const handleNotificationSend = (item: SampleAppointments) => {
        setSelectedAppointment(item)
        setNotificationModalOpen(true)
    }
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <AppointmentModal visible={modalOpen} closeModal={handleModalClose} val={selectedAppointment} onUpdate={() => setFlag(!flag)} />
            <AppointmentDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedAppointment as SampleAppointments} />
            <SendNotificationModal visible={notificationModalOpen} closeModal={handleNotificationModalClose} val={selectedAppointment ? { id: (selectedAppointment?.customer as any)?.userId } : undefined} />
            <RatingModal visible={ratingModalOpen} closeModal={handleRatingModalClose} val={selectedAppointment as SampleAppointments} onSubmitData={() => setFlag(!flag)} />
            <CancelAppointmentModal visible={cancelModalOpen} closeModal={handleCancelModalClose} val={selectedAppointment as SampleAppointments} onSubmitData={() => setFlag(!flag)} />
            <RefundModal visible={refundModalOpen} closeModal={handleRefundModalClose} val={selectedAppointment as SampleAppointments} onSubmitData={() => setFlag(!flag)} />

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



            <AppointmentsTable
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                onUpdateFlag={flag}
                handleRow={handleRow}
                onAppointmentChange={handleAppointmentChange}
                onSendNotification={handleNotificationSend}
                handleAssign={handleRefund}
            />
        </div>
    )
}

export default Appointments
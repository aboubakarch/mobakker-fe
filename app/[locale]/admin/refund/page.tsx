"use client"
import AppointmentModal from '@/components/modal/AppointmentModal'
import CancelAppointmentModal from '@/components/modal/CancelAppointmentModal'
import DeleteModal from '@/components/modal/DeleteModal'
import AppointmentDetailsModal from '@/components/modal/details/AppointmentDetailsModal'
import ProcessRefundModal from '@/components/modal/ProcessRefundModal'
import RatingModal from '@/components/modal/RatingModal'
import RefundModal from '@/components/modal/RefundModal'
import SendNotificationModal from '@/components/modal/SendNotificationModal'
import AppointmentsTable from '@/components/table/AppointmentsTable'
import RefundTable from '@/components/table/RefundTable'
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
    const [selectedAppointment, setSelectedAppointment] = useState<undefined | Refund>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()

    const [refundModalOpen, setRefundModalOpen] = useState(false);




    const handleAppointmentChange = async (item: Refund, status: string) => {
        try {



            await APIService.getInstance().editRefund(item?.id, { status, amount: item.amount });
            toast({
                variant: "success",
                description: "Refund Updated!",
            })
            if (status === "APPROVED") {
                setSelectedAppointment(item)
                setRefundModalOpen(true)
            }

            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error Updating Refund!",
            })

        }
    }

    const handleRefundModalClose = () => {
        setRefundModalOpen(false);
        setSelectedAppointment(undefined)
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <ProcessRefundModal visible={refundModalOpen} closeModal={handleRefundModalClose} val={selectedAppointment as Refund} onSubmitData={() => setFlag(!flag)} />

            <PageHeader title={t("Refund Requests")}
                description={t("Here You Can Track you refund requests")}
            >
            </PageHeader>



            <RefundTable
                onUpdateFlag={flag}
                onAppointmentChange={handleAppointmentChange}
            />
        </div>
    )
}

export default Appointments
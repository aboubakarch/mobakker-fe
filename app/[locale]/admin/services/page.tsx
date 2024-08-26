"use client"

import DeleteModal from '@/components/modal/DeleteModal'
import ServiceModal from '@/components/modal/ServicesModal'
import ServiceDetailsModal from '@/components/modal/details/ServiceDetailsModal'
import ServicesTable from '@/components/table/ServicesTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Services = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<undefined | SampleServices>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedService(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedService(undefined)
    }
    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedService(undefined)
    }


    const handleEdit = (item: SampleServices) => {
        setSelectedService(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleServices) => {
        setSelectedService(item)
        setDeleteModalOpen(true)
    }
    const handleRow = (item: SampleServices) => {
        setSelectedService(item)
        setDetailsModalOpen(true)
    }
    const onDeleteService = async () => {
        try {
            if (selectedService) {

                await APIService.getInstance().deleteService(selectedService?.id);
            }
            else {
                throw new Error("No Service selected")
            }


            toast({
                variant: "destructive",
                description: "Service Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting service!",
            })

        }
        handleDeleteModalClose()
    }
    const handlStatusChange = async (item: SampleServices, status: string) => {
        try {

            await APIService.getInstance().updateServiceStatus(item?.id, { status: status });
            toast({
                variant: "success",
                description: "Service Updated!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error Updating Service!",
            })

        }
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <ServiceModal visible={modalOpen} closeModal={handleModalClose} val={selectedService} onUpdate={() => setFlag(!flag)} />
            <ServiceDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedService as SampleServices} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteService}
                title={messages.SERVICES}
            />

            <PageHeader title={t(messages.SERVICES)}
                description={t(messages.OVERVIEW_MANAGE_SERVICES)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_SERVICES)}</Button>
            </PageHeader>

            <ServicesTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} onAppointmentChange={handlStatusChange} />
        </div>
    )
}

export default Services
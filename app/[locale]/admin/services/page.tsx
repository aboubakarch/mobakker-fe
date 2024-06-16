"use client"

import DeleteModal from '@/components/modal/DeleteModal'
import ServiceModal from '@/components/modal/ServicesModal'
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


    const handleEdit = (item: SampleServices) => {
        setSelectedService(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleServices) => {
        console.log(item)
        setSelectedService(item)
        setDeleteModalOpen(true)
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

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <ServiceModal visible={modalOpen} closeModal={handleModalClose} val={selectedService} onUpdate={() => setFlag(!flag)} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteService}
                title={messages.SERVICES}
            />

            <PageHeader title={t(messages.SERVICES)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_SERVICES)}</Button>
            </PageHeader>

            <ServicesTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} />
        </div>
    )
}

export default Services
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
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<undefined | SampleServices>(undefined)
    const [flag, setFlag] = useState(false)


    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedService(undefined)
    }



    const handleRow = (item: SampleServices) => {
        setSelectedService(item)
        setDetailsModalOpen(true)
    }


    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            {/* <ServiceModal visible={modalOpen} closeModal={handleModalClose} val={selectedService} onUpdate={() => setFlag(!flag)} /> */}
            <ServiceDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedService as SampleServices} />
            {/*
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteService}
                title={messages.SERVICES}
            /> */}

            <PageHeader title={t(messages.SERVICES)}
                description={t(messages.OVERVIEW_MANAGE_SERVICES)}
            >
                {/* <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_SERVICES)}</Button> */}
            </PageHeader>

            <ServicesTable onUpdateFlag={flag} handleRow={handleRow} />
        </div>
    )
}

export default Services
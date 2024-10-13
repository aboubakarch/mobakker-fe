"use client"
import DeleteModal from '@/components/modal/DeleteModal'
import ServiceTypeModal from '@/components/modal/ServiceTypeModal'
import ServiceTypeTable from '@/components/table/ServiceTypeTable'
import { Button } from '@/components/ui'
// import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
// import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ServiceTypes = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedType, setSelectedType] = useState<undefined | ServiceType>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedType(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedType(undefined)
    }


    const handleEdit = (item: ServiceType) => {
        setSelectedType(item)
        setModalOpen(true)
    }
    const handleDelete = (item: ServiceType) => {
        console.log(item)
        setSelectedType(item)
        setDeleteModalOpen(true)
    }
    const onDeleteBranch = async () => {
        try {
            if (selectedType) {

                await APIService.getInstance().deleteServiceType(selectedType?.id);
            }
            else {
                throw new Error("No Service Type selected")
            }


            toast({
                variant: "destructive",
                description: "Service Type Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Service Type!",
            })

        }
        handleDeleteModalClose()
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <ServiceTypeModal visible={modalOpen} closeModal={handleModalClose} val={selectedType} onUpdate={() => setFlag(!flag)} />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteBranch}
                title={"navigation:serviceType"}
            />

            <PageHeader title={t("navigation:serviceType")}
                description={t(messages.OVERVIEW_MANAGE_SERVICES)}
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_SERVICE_TYPE)}</Button>

            </PageHeader>
            <ServiceTypeTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} />
        </div>
    )
}

export default ServiceTypes
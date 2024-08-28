"use client"
import AdminModal from '@/components/modal/AdminModal'
import DeleteModal from '@/components/modal/DeleteModal'
import EmployeeDetailsModal from '@/components/modal/details/EmployeeDetailsModal'
import ProviderModal from '@/components/modal/ProviderModal'
import AdminTable from '@/components/table/AdminTable'
import ProviderTable from '@/components/table/ProviderTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { RoleType } from '@/constants/enums'
import { useToast } from '@/hooks/use-toast'
import { getCookie } from '@/lib/helpers'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Providers = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<undefined | SampleBranchManager>(undefined)
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const role = getCookie("role")

    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedProvider(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedProvider(undefined)
    }


    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedProvider(undefined)
    }

    const handleEdit = (item: SampleBranchManager) => {
        setSelectedProvider(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleBranchManager) => {
        console.log(item)
        setSelectedProvider(item)
        setDeleteModalOpen(true)
    }


    const handleRow = (item: SampleBranchManager) => {
        setSelectedProvider(item)
        setDetailsModalOpen(true)
    }
    const onDeleteEmplyee = async () => {
        setLoading(true)
        try {
            if (selectedProvider) {

                await APIService.getInstance().deleteUser(selectedProvider?.id as any);
            }
            else {
                throw new Error("No Admin selected")
            }


            toast({
                variant: "destructive",
                description: "Admin Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Admin!",
            })

        }
        setLoading(false)

        handleDeleteModalClose()
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <AdminModal visible={modalOpen} closeModal={handleModalClose} val={selectedProvider} onUpdate={() => setFlag(!flag)} />
            <EmployeeDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedProvider as any} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteEmplyee}
                title={"Admin"}
                loading={loading}
            />
            <PageHeader title={t("Admins")}
                description={t(messages.VIEW_TEAM_INFO)}
            >
                {role === RoleType.SUPER_ADMIN &&
                    <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t("Add Admin")}</Button>
                }
            </PageHeader>
            <AdminTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
        </div>
    )
}

export default Providers
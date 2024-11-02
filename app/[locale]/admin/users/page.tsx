"use client"
import React, { useState } from 'react'
import DeleteModal from '@/components/modal/DeleteModal'
import EmployeeDetailsModal from '@/components/modal/details/EmployeeDetailsModal'
import ProviderModal from '@/components/modal/ProviderModal'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import { useTranslation } from 'react-i18next'
import UsersTable from '@/components/table/UsersTable'
import CustomerModal from '@/components/modal/CustomerModal'
import { convertToFormData } from '@/lib/helpers'

const LoyalProgram = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<undefined | SampleBranchManager>(undefined)
    const [flag, setFlag] = useState(false)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

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
                throw new Error("No User selected")
            }


            toast({
                variant: "destructive",
                description: "User Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting User!",
            })

        }
        setLoading(false)

        handleDeleteModalClose()
    }

    const onToggle = async (val: SampleProvider, active: boolean) => {
        setLoading(true)
        try {

            const vals = {
                isVerified: active ? "UNVERIFIED" : "BLOCKED"
            }
            const formData = convertToFormData(vals)

            await APIService.getInstance().editCustomer((val as any).id as string, formData as any);


            toast({
                variant: "success",
                description: "User Updated!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error updating use!",
            })

        }
        setLoading(false)

        handleDeleteModalClose()
    }
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <CustomerModal visible={modalOpen} closeModal={handleModalClose} val={selectedProvider} onUpdate={() => setFlag(!flag)} />

            <EmployeeDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedProvider as any} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteEmplyee}
                title={messages.PROVIDERS}
                loading={loading}
            />

            <PageHeader title={t(messages.MANAGE_USERS)}
                description='Manage your users'
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.CREATE_USER)}</Button>

            </PageHeader>
            <UsersTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} onToggle={onToggle as any} />
        </div>
    )
}

export default LoyalProgram
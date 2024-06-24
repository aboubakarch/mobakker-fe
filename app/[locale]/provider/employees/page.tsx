"use client"
import DeleteModal from '@/components/modal/DeleteModal'
import EmployeeModal from '@/components/modal/EmployeeModal'
import EmployeeTable from '@/components/table/EmployeeTable'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Employees = () => {
    const { t } = useTranslation()
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<undefined | SampleBranchManager>(undefined)
    const [flag, setFlag] = useState(false)
    const { toast } = useToast()


    const handleModalClose = () => {
        setModalOpen(false)
        setSelectedEmployee(undefined)
    }

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false)
        setSelectedEmployee(undefined)
    }


    const handleEdit = (item: SampleBranchManager) => {
        setSelectedEmployee(item)
        setModalOpen(true)
    }
    const handleDelete = (item: SampleBranchManager) => {
        console.log(item)
        setSelectedEmployee(item)
        setDeleteModalOpen(true)
    }
    const onDeleteEmplyee = async () => {
        try {
            if (selectedEmployee) {

                // await APIService.getInstance().deleteBranch(selectedEmployee?.id);
            }
            else {
                throw new Error("No branch selected")
            }


            toast({
                variant: "destructive",
                description: "Employee Deleted!",
            })
            setFlag(!flag)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error deleting Employee!",
            })

        }
        handleDeleteModalClose()
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <EmployeeModal visible={modalOpen} closeModal={handleModalClose} val={selectedEmployee} onUpdate={() => setFlag(!flag)} />
            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteEmplyee}
                title={messages.EMPLOYEES}
            />
            <PageHeader title={t(messages.EMPLOYEES)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_EMPLOYEES)}</Button>
            </PageHeader>


            <EmployeeTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} />

        </div>
    )
}

export default Employees
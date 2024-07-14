"use client"
import AssignBranchModal from '@/components/modal/AssignBranchModal'
import DeleteModal from '@/components/modal/DeleteModal'
import EmployeeModal from '@/components/modal/EmployeeModal'
import EmployeeDetailsModal from '@/components/modal/details/EmployeeDetailsModal'
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
    const [detailsModalOpen, setDetailsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<undefined | SampleBranchManager>(undefined)
    const [flag, setFlag] = useState(false)




    const handleDetailsModalClose = () => {
        setDetailsModalOpen(false)
        setSelectedEmployee(undefined)
    }

    const handleRow = (item: SampleBranchManager) => {
        setSelectedEmployee(item)
        setDetailsModalOpen(true)
    }

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            {/* <EmployeeModal visible={modalOpen} closeModal={handleModalClose} val={selectedEmployee} onUpdate={() => setFlag(!flag)} /> */}
            <EmployeeDetailsModal visible={detailsModalOpen} closeModal={handleDetailsModalClose} val={selectedEmployee as any} />
            {/* <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteEmplyee}
                title={messages.EMPLOYEES}
                loading={loading}
            /> */}
            {/* <AssignBranchModal
                visible={assignModalOpen} closeModal={handleAssignModalClose} val={selectedEmployee} onUpdate={() => setFlag(!flag)}
            /> */}
            <PageHeader title={t(messages.EMPLOYEES)}
                description={t(messages.VIEW_TEAM_INFO)}
            >
                {/* <Button onClick={() => setModalOpen(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_EMPLOYEES)}</Button> */}
            </PageHeader>


            <EmployeeTable onUpdateFlag={flag} handleRow={handleRow} />

        </div>
    )
}

export default Employees
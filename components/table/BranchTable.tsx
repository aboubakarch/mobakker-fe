"use client"
import React, { FC } from 'react'
import { DataTable } from './DataTable'
import { branchColumns } from './columns/BranchColumn'
import { useTranslation } from 'react-i18next'

const BranchTable: FC<ITableProps<SampleBranch>> = ({ handleEdit, handleDelete }) => {
    const { t } = useTranslation()

    const data: SampleBranch[] = [
        {
            name: "Branch Lorem",
            location: "Abcd",
            password: "Password@123",
            state: "01",
            city: "ABC"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC",
            password: "Password@123"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC",
            password: "Password@123"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC",
            password: "Password@123"
        },
    ]


    return (
        <div>
            <DataTable
                data={data}
                columns={branchColumns(t, handleEdit, handleDelete)}
                filterKey='name' count={data.length}
                rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5'
            />
        </div>
    )
}

export default BranchTable
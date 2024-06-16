"use client"
import React, { FC } from 'react'
import { DataTable } from './DataTable'
import { useTranslation } from 'react-i18next'
import { customerColumns } from './columns/CustomerCareColumn'

const CustomerCareTable: FC<ITableProps<SampleCustomerCare>> = ({ handleEdit, handleDelete }) => {
    const { t } = useTranslation()

    const data: SampleCustomerCare[] = [
        {
            firstName: "Branch ",
            lastName: "Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            password: "Password@123",
            email: "test@test.com",
            phone: "+923087030889"
        },
        {
            firstName: "Branch",
            lastName: "Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            password: "Password@123",
            email: "test@test.com",
            phone: "+923087030889"
        },
        {
            firstName: "Branch",
            lastName: "Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            password: "Password@123",
            email: "test@test.com",
            phone: "+923087030889"
        },
        {
            firstName: "Branch",
            lastName: "Lorem",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            password: "Password@123",
            email: "test@test.com",
            phone: "+923087030889"
        },

    ]
    return (
        <div>
            <DataTable data={data} columns={customerColumns(t, handleEdit, handleDelete)} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default CustomerCareTable
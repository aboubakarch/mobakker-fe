"use client"
import React, { FC } from 'react'
import { DataTable } from './DataTable'
import { providerColumns } from './columns/ProviderColumn'
import { useTranslation } from 'react-i18next'

const ProviderTable: FC<ITableProps<SampleProvider>> = ({ handleEdit, handleDelete }) => {
    const { t } = useTranslation()

    const data: SampleProvider[] = [
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
            <DataTable data={data} columns={providerColumns(t, handleEdit, handleDelete)} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default ProviderTable
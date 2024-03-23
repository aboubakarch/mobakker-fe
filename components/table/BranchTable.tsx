"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { branchColumns } from './columns/BranchColumn'
import { useTranslation } from 'react-i18next'

const BranchTable = () => {
    const { t } = useTranslation()

    const data: SampleBranch[] = [
        {
            name: "Branch Lorem",
            location: "Abcd",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, earum! Debitis, aspernatur qui nesciunt magnam laboriosam culpa nisi error maiores sunt fugit? Vitae nemo et odit, accusantium rem quos excepturi.",
            pasword: "Password@123"
        },
    ]
    return (
        <div>
            <DataTable data={data} columns={branchColumns(t)} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default BranchTable
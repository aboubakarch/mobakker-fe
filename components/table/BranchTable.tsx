"use client"
import React, { FC, useEffect } from 'react'
import { DataTable } from './DataTable'
import { branchColumns } from './columns/BranchColumn'
import { useTranslation } from 'react-i18next'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'

const BranchTable: FC<ITableProps<SampleBranch>> = ({ handleEdit, handleDelete }) => {
    const { t } = useTranslation()
    const { toast } = useToast()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    page: 1, take: 10
                }
                const response = await APIService.getInstance().getBranches(params)
                console.log(response)
            } catch (error) {
                toast({
                    variant: "destructive",
                    description: "Error! Something went wrong",
                })
            }
        }
        console.log("first")
        fetchData()
    }, [])

    const data: SampleBranch[] = [
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC"
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC",
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC",
        },
        {
            name: "Branch Lorem",
            location: "Abcd",
            state: "01",
            city: "ABC",
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
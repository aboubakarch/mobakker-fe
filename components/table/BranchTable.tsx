"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { branchColumns } from './columns/BranchColumn'
import { useTranslation } from 'react-i18next'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'

const BranchTable: FC<ITableProps<SampleBranch>> = ({ handleEdit, handleDelete, onUpdateFlag }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SampleBranch[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const params = {
                    page: 1, take: 10
                }
                const response = await APIService.getInstance().getBranches(params)
                console.log(response)
                setData(response.items)
            } catch (error) {
                toast({
                    variant: "destructive",
                    description: "Error! Something went wrong",
                })
            }
        }
        fetchData()
    }, [onUpdateFlag])




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
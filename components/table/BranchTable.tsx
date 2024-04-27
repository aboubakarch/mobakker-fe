"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { branchColumns } from './columns/BranchColumn'
import { useTranslation } from 'react-i18next'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'
import { Skeleton } from '../ui/skeleton'

const BranchTable: FC<ITableProps<SampleBranch>> = ({ handleEdit, handleDelete, onUpdateFlag }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SampleBranch[]>([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 10
            }
            const response = await APIService.getInstance().getBranches(params)
            setData(response.items)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }
    useEffect(() => {

        fetchData()

    }, [onUpdateFlag])




    return (
        <div>
            {loading && data.length === 0 ? (
                <div className="flex flex-col space-y-2 bg-white p-4">
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                </div>
            ) : (<DataTable
                data={data}
                columns={branchColumns(t, handleEdit, handleDelete)}
                filterKey='name' count={data.length}
                rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5'
            />)}
        </div>
    )
}

export default BranchTable
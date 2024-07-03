"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { employeeColumns } from './columns/EmployeeColumns'
import { useTranslation } from 'react-i18next'
import { useToast } from '@/hooks/use-toast'
import { PaginationState } from '@tanstack/react-table'
import APIService from '@/services/api'
import { Skeleton } from '../ui/Skeleton'

const EmployeeTable: FC<ITableProps<SampleBranchManager>> = ({ handleEdit, handleDelete, onUpdateFlag, handleAssign, handleRow }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SampleBranchManager[]>([])
    const [total, setTotal] = useState<number>(1)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })

    const fetchData = async () => {

        try {
            setLoading(true)

            const params = {
                page: pagination.pageIndex + 1, take: pagination.pageSize
            }
            const response = await APIService.getInstance().getEmployees(params)
            console.log(response)
            setData(response.items.map((item: any) => ({ ...item.user, employerId: (item as any)?.employerId, employeeId: (item as any)?.id, data: { ...item } })))
            setTotal(response.pageMetaDto.itemCount)
            // console.log(response)
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error?.response?.data?.message || "Error! Something went wrong",
            })
        }
        setLoading(false)
        setPageLoaded(true)
    }
    useEffect(() => {

        fetchData()

    }, [onUpdateFlag])
    useEffect(() => {
        fetchData()

    }, [pagination])



    return (

        <div>
            {!pageLoaded && data.length === 0 ? (
                <div className="flex flex-col space-y-2 bg-white p-4">
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                </div>
            ) : (<DataTable
                data={data}
                columns={employeeColumns(t, handleEdit, handleDelete, handleAssign)}
                filterKey='firstName' count={total}
                onChangePagination={setPagination}
                tablePagination={pagination}
                onRowClick={handleRow}
                loading={loading} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />)}

        </div>
    )
}

export default EmployeeTable
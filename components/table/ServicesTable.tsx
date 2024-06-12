"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { serviceColumns } from './columns/ServicesColumns'
import { useTranslation } from 'react-i18next'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import { Skeleton } from '../ui/Skeleton'
import { PaginationState } from '@tanstack/react-table'

const ServicesTable: FC<ITableProps<SampleServices>> = ({ handleEdit, handleDelete, onUpdateFlag }) => {
    const { t } = useTranslation()

    const { toast } = useToast()
    const [data, setData] = useState<SampleServices[]>([])
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
            const response = await APIService.getInstance().getServices(params)
            setData(response.items)
            setTotal(response.pageMetaDto.itemCount)
            // console.log(response)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
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
            ) : (
                <DataTable data={data} columns={serviceColumns(t, handleEdit, handleDelete)} filterKey='name' count={total}
                    onChangePagination={setPagination}
                    tablePagination={pagination}
                    loading={loading} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
            )}
        </div>
    )
}

export default ServicesTable
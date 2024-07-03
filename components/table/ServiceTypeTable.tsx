"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { useTranslation } from 'react-i18next'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'
import { Skeleton } from '../ui/Skeleton'
import { PaginationState } from '@tanstack/react-table'
import { serviceTypeColumns } from './columns/ServiceTypeColumn'
import { SortEnum } from '@/constants/enums'

const ServiceTypeTable: FC<ITableProps<ServiceType>> = ({ handleEdit, handleDelete, onUpdateFlag, handleRow }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<ServiceType[]>([])
    const [total, setTotal] = useState<number>(1)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
    const [sort, setSort] = useState<SortEnum>(SortEnum.Descending)

    const fetchData = async () => {

        try {
            setLoading(true)

            const params = {
                page: pagination.pageIndex + 1, take: pagination.pageSize, order: sort
            }
            const response = await APIService.getInstance().getServiceType(params)
            setData(response.items)
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

    const toggleSort = () => {
        setSort(sort === SortEnum.Ascending ? SortEnum.Descending : SortEnum.Ascending)
        setPagination({ pageIndex: 0, pageSize: 10 })
    }



    return (
        <div>
            {!pageLoaded && data.length === 0 ? (
                <div className="flex flex-col space-y-2 bg-white p-4">
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                </div>
            ) : (<DataTable
                data={data}
                columns={serviceTypeColumns(t, handleEdit, handleDelete)}
                filterKey='name' count={total}
                onChangePagination={setPagination}
                tablePagination={pagination}
                sort={sort}
                toggleSort={toggleSort}
                onRowClick={handleRow}
                loading={loading}
                rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5'
            />)}
        </div>
    )
}

export default ServiceTypeTable
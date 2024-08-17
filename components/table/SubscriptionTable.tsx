"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { useTranslation } from 'react-i18next'
import { useToast } from '@/hooks/use-toast'
import { PaginationState } from '@tanstack/react-table'
import APIService from '@/services/api'
import { Skeleton } from '../ui/Skeleton'
import { SortEnum } from '@/constants/enums'
import { debounce } from 'lodash'
import { subscriptionColumns } from './columns/SubscriptionColumns'
import SubscriptionFilters from './filters/SubscriptionFilters'

const SubscriptionsTable: FC<ITableProps<SampleSubscription>> = ({ onUpdateFlag, onAppointmentChange, handleRow }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SampleSubscription[]>([])
    const [total, setTotal] = useState<number>(1)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
    const [sort, setSort] = useState<SortEnum>(SortEnum.Descending)
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState<ISubscriptionFilters>({})

    const fetchData = async () => {
        try {
            setLoading(true)
            let params: any = {
                page: pagination.pageIndex + 1, take: pagination.pageSize, order: sort, ...filters
            }
            if (search !== '') {
                params = { ...params, search }
            }
            const response = await APIService.getInstance().getSubscribers(params)
            setData(response.items)
            setTotal(response.pageMetaDto.itemCount)
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
    useEffect(() => {
        handleSearch(search)

    }, [search])
    useEffect(() => {
        setPagination({ pageIndex: 0, pageSize: 10 })

    }, [filters])

    const handleSearch =
        debounce((term: string) => {
            setPagination({ pageIndex: 0, pageSize: 10 })
        }, 400)

    const handleApplyFilters = (fil: ISubscriptionFilters) => {
        setFilters(fil)
    }

    const handleResetFilters = () => {
        setFilters({})
    }

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
            ) : (
                <DataTable
                    data={data}
                    columns={subscriptionColumns(t, onAppointmentChange)}
                    filterKey='id' count={total}
                    onChangePagination={setPagination}
                    tablePagination={pagination}
                    loading={loading}
                    sort={sort}
                    toggleSort={toggleSort}
                    onRowClick={handleRow}
                    rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5'
                    search={search}
                    onSearch={(q: string) => setSearch(q)}
                    filterComponent={() => <SubscriptionFilters onApply={handleApplyFilters} onReset={handleResetFilters} />}
                />
            )}
        </div>
    )
}

export default SubscriptionsTable

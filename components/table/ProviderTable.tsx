"use client"
import React, { FC, useEffect, useState } from 'react'
import { providerColumns } from './columns/ProviderColumn'
import { DataTable } from './DataTable'
import { employeeColumns } from './columns/EmployeeColumns'
import { useTranslation } from 'react-i18next'
import { useToast } from '@/hooks/use-toast'
import { PaginationState } from '@tanstack/react-table'
import APIService from '@/services/api'
import { Skeleton } from '../ui/Skeleton'
import { SortEnum } from '@/constants/enums'
import { debounce } from 'lodash'
import EmployeeFilters from './filters/EmployeeFilters'

const ProviderTable: FC<ITableProps<SampleProvider>> = ({ handleEdit, handleDelete, handleRow, onUpdateFlag, onToggle }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SampleBranchManager[]>([])
    const [total, setTotal] = useState<number>(1)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
    const [sort, setSort] = useState<SortEnum>(SortEnum.Descending)
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState<IEmployeeFilters>({})

    const fetchData = async () => {

        try {
            setLoading(true)

            let params: any = {
                page: pagination.pageIndex + 1, take: pagination.pageSize, order: sort, ...filters
            }
            if (search !== '') {
                params = { ...params, search }
            }
            const response = await APIService.getInstance().getServiceProvider(params)
            setData(response.items.map((item: any) => ({ ...item.user, data: { ...item } })))
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

    useEffect(() => {
        handleSearch(search)

    }, [search])
    useEffect(() => {
        setPagination({ pageIndex: 0, pageSize: 10 })

    }, [filters])


    const handleSearch =
        debounce((term: string) => {
            console.log(term)
            setPagination({ pageIndex: 0, pageSize: 10 })
        }, 400)

    const handleApplyFilters = (fil: IEmployeeFilters) => {
        setFilters(fil)
    }
    const handleResetFilters = () => {
        if (filters.branchId) {

            setFilters({})
        }
    }

    const toggleSort = () => {
        setSort(sort === SortEnum.Ascending ? SortEnum.Descending : SortEnum.Ascending)
        setPagination({ pageIndex: 0, pageSize: 10 })
    }


    return (

        <div>
            {!pageLoaded && data.length === 0 ? (
                <div className="flex flex-col space-y-2 bg-background p-4">
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                </div>
            ) : (<DataTable
                data={data}
                columns={providerColumns(t, handleEdit, handleDelete, onToggle as any)}
                filterKey='firstName' count={total}
                onChangePagination={setPagination}
                tablePagination={pagination}
                sort={sort}
                toggleSort={toggleSort}
                onRowClick={handleRow}
                loading={loading} rowStyle='odd:bg-background even:bg-indigo-800 even:bg-opacity-5'
                search={search}
                onSearch={(q: string) => setSearch(q)}
                filterComponent={() => <div className="absolute" />}

            />)}

        </div>
    )
}

export default ProviderTable
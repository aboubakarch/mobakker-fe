"use client"
import React, { FC, useCallback, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { branchColumns } from './columns/BranchColumn'
import { useTranslation } from 'react-i18next'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'
import { Skeleton } from '../ui/Skeleton'
import { PaginationState } from '@tanstack/react-table'
import { SortEnum } from '@/constants/enums'
import { debounce } from 'lodash'
import BranchFilters from './filters/BranchFilters'

const BranchTable: FC<ITableProps<SampleBranch>> = ({ handleEdit, handleDelete, onUpdateFlag, handleAssign, handleRow }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SampleBranch[]>([])
    const [total, setTotal] = useState<number>(1)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
    const [sort, setSort] = useState<SortEnum>(SortEnum.Descending)
    const [search, setSearch] = useState("")
    const [filters, setFilters] = useState<IBranchFilters>({})

    const fetchData = async () => {

        try {
            setLoading(true)

            let params: any = {
                page: pagination.pageIndex + 1, take: pagination.pageSize, order: sort, ...filters
            }
            if (search !== '') {
                params = { ...params, search }
            }
            const response = await APIService.getInstance().getBranches(params)
            setData(response.items)
            setTotal(response.pageMetaDto.itemCount)
            // console.log(response)
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error?.response?.data?.message && typeof error?.response?.data?.message === "string" ?
                    error?.response?.data?.message : "Error! Something went wrong",
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

    const handleApplyFilters = (fil: IBranchFilters) => {
        setFilters(fil)
    }
    const handleResetFilters = () => {
        if (filters.city || filters.managerId) {

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
                <div className="flex flex-col space-y-2 bg-white p-4">
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                </div>
            ) : (<DataTable
                data={data}
                columns={branchColumns(t, handleEdit, handleDelete, handleAssign)}
                filterKey='name' count={total}
                onChangePagination={setPagination}
                tablePagination={pagination}
                loading={loading}
                rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5'
                sort={sort}
                toggleSort={toggleSort}
                onRowClick={handleRow}
                search={search}
                onSearch={(q: string) => setSearch(q)}
                filterComponent={() => <BranchFilters onApply={handleApplyFilters} onReset={handleResetFilters} />}
            />)}
        </div>
    )
}

export default BranchTable
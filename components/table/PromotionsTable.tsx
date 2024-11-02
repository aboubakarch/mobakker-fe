"use client"
import React, { FC, useEffect, useState } from 'react'
import { DataTable } from './DataTable'
import { promotionsColumns } from './columns/PromotionsColumns'
import { useTranslation } from 'react-i18next'
import { PaginationState } from '@tanstack/react-table'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'
import { Skeleton } from '../ui/Skeleton'
import { SortEnum } from '@/constants/enums'
import { debounce } from 'lodash'

const PromotionsTable: FC<ITableProps<SamplePromotions>> = ({ handleEdit, handleDelete, onUpdateFlag, onToggle, handleRow }) => {
    const { t } = useTranslation()
    const { toast } = useToast()
    const [data, setData] = useState<SamplePromotions[]>([])
    const [total, setTotal] = useState<number>(1)
    const [pageLoaded, setPageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [pagination, setPagination] = useState<PaginationState>({ pageIndex: 0, pageSize: 10 })
    const [sort, setSort] = useState<SortEnum>(SortEnum.Descending)
    const [search, setSearch] = useState("")

    const fetchData = async () => {

        try {
            setLoading(true)

            let params: any = {
                page: pagination.pageIndex + 1, take: pagination.pageSize, order: sort
            }
            if (search !== '') {
                params = { ...params, search }
            }
            const response = await APIService.getInstance().getPromotions(params)
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

    useEffect(() => {
        handleSearch(search)

    }, [search])

    const handleSearch =
        debounce((term: string) => {
            console.log(term)
            setPagination({ pageIndex: 0, pageSize: 10 })
        }, 400)

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
                columns={promotionsColumns(t, handleEdit, handleDelete, onToggle)}
                filterKey='promoCode' count={total}
                onChangePagination={setPagination}
                tablePagination={pagination}
                sort={sort}
                toggleSort={toggleSort}
                onRowClick={handleRow}
                loading={loading} rowStyle='odd:bg-background even:bg-indigo-800 even:bg-opacity-5'
                search={search}
                onSearch={(q: string) => setSearch(q)}
                filterComponent={() => <div className='absolute'></div>}
            />)}


        </div>
    )
}

export default PromotionsTable
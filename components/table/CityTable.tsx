"use client";
import React, { FC, useCallback, useEffect, useState } from "react";
import { DataTable } from "./DataTable";
import { cityColumns } from "./columns/CityColumn";
import { useTranslation } from "react-i18next";
import APIService from "@/services/api";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "../ui/Skeleton";
import { PaginationState } from "@tanstack/react-table";
import { SortEnum } from "@/constants/enums";
import { debounce } from "lodash";

const CityTable: FC<ITableProps<City>> = ({
    handleEdit,
    handleDelete,
    onUpdateFlag,
    handleRow,
}) => {
    const { t } = useTranslation();
    const { toast } = useToast();
    const [data, setData] = useState<City[]>([]);
    const [total, setTotal] = useState<number>(1);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 100,
    });
    const [sort, setSort] = useState<SortEnum>(SortEnum.Descending);
    const [search, setSearch] = useState("");
    // const [filters, setFilters] = useState<ICityFilters>({});

    const fetchData = async () => {
        try {
            setLoading(true);

            let params: any = {
                page: pagination.pageIndex + 1,
                take: pagination.pageSize,
                order: sort,
                // ...filters,
            };
            if (search !== "") {
                params = { ...params, search };
            }
            const response = await APIService.getInstance().getCities(params);
            setData(response);
            setTotal(response.length);
        } catch (error: any) {
            toast({
                variant: "destructive",
                description:
                    error?.response?.data?.message &&
                        typeof error?.response?.data?.message === "string"
                        ? error?.response?.data?.message
                        : "Error! Something went wrong",
            });
        }
        setLoading(false);
        setPageLoaded(true);
    };

    useEffect(() => {
        fetchData();
    }, [onUpdateFlag]);

    useEffect(() => {
        fetchData();
    }, [pagination]);

    useEffect(() => {
        handleSearch(search);
    }, [search]);

    // useEffect(() => {
    //     setPagination({ pageIndex: 0, pageSize: 100 });
    // }, [filters]);

    const handleSearch = debounce((term: string) => {
        setPagination({ pageIndex: 0, pageSize: 100 });
    }, 400);

    // const handleApplyFilters = (fil: ICityFilters) => {
    //     setFilters(fil);
    // };

    // const handleResetFilters = () => {
    //     if (filters.name || filters.stateId) {
    //         setFilters({});
    //     }
    // };

    const toggleSort = () => {
        setSort(sort === SortEnum.Ascending ? SortEnum.Descending : SortEnum.Ascending);
        setPagination({ pageIndex: 0, pageSize: 100 });
    };

    return (
        <div>
            {!pageLoaded && data.length === 0 ? (
                <div className="flex flex-col space-y-2 bg-background p-4">
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                    <Skeleton className="h-[75px] w-full rounded-xl" />
                </div>
            ) : (
                <DataTable
                    data={data}
                    columns={cityColumns(t, handleEdit, handleDelete)}
                    filterKey="name"
                    count={total}
                    onChangePagination={setPagination}
                    tablePagination={pagination}
                    loading={loading}
                    rowStyle="odd:bg-background even:bg-indigo-800 even:bg-opacity-5"
                    sort={sort}
                    toggleSort={toggleSort}
                    onRowClick={handleRow}
                    search={search}
                    onSearch={(q: string) => setSearch(q)}
                    filterComponent={() => <div className="absolute" />}
                />
            )}
        </div>
    );
};

export default CityTable;

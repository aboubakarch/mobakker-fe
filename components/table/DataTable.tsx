"use client"

import {
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    SortingState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Button,
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui"
import { ChevronDownIcon } from "@/svgs"
import Pagination from "./Pagination"
import { useState } from "react"
import { Input } from "@/components/ui"
import { Filter, SortAsc } from "lucide-react"
import { cn } from "@/lib/utils"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    filterKey: string,
    count: number,
    rowStyle?: string,
    headerStyle?: string,
    tableStyle?: string,
    tableBodyStyle?: string
}

export function DataTable<TData, TValue>({
    columns,
    data,
    filterKey,
    count = 10,
    headerStyle = "",
    tableStyle = "",
    rowStyle = "",
    tableBodyStyle = ""
}: DataTableProps<TData, TValue>) {
    // const [currentPage, setCurrentPage] = useState(1)
    const [sorting, setSorting] = useState<SortingState>([])
    // const [rowsPerPage, setRowsPerPage] = useState(10)
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })
    const [rowSelection, setRowSelection] = useState({})
    const [currFilter, setCurrFilter] = useState(filterKey)


    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        // manualPagination: true,
        onPaginationChange: setPagination,
        onRowSelectionChange: setRowSelection,
        rowCount: count,
        state: {
            sorting,
            columnFilters,
            pagination,
            rowSelection,
        },
        debugTable: true
    })

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 bg-white rounded-md px-3">
                <Input
                    placeholder={`Search ${currFilter}...`}
                    value={(table.getColumn(currFilter)?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn(currFilter)?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm capitalize bg-indigo-800 bg-opacity-5"
                />
                <div className="flex gap-3">
                    <Button variant="outline" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-indigo-800 bg-opacity-5 hover:bg-indigo-100">
                        <SortAsc className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                        <p>Sort</p>
                    </Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-indigo-800 bg-opacity-5 hover:bg-indigo-100">
                                <Filter className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                                <p>Filter</p>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {table
                                .getAllColumns()
                                .filter((column) => column.getCanFilter())
                                .map((column) => {
                                    return (
                                        <DropdownMenuCheckboxItem
                                            key={column.id}
                                            className="capitalize"
                                            checked={column.id === currFilter}
                                            onCheckedChange={() =>
                                                setCurrFilter(column.id)
                                            }
                                        >
                                            {column.id}
                                        </DropdownMenuCheckboxItem>
                                    )
                                })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <div className="rounded-md border">
                <Table className={tableStyle}>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow className={headerStyle} key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody className={tableBodyStyle}>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    className={rowStyle}
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-between py-2 px-3 bg-white rounded-md">
                <div className="flex gap-2 items-center text-sm text-gray-500">
                    <p>Rows per page:</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={"default"} className="bg-indigo-800 bg-opacity-5 hover:bg-indigo-100  rounded-md justify-center items-center gap-2 inline-flex">
                                <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">{pagination.pageSize}</p>
                                <ChevronDownIcon />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='flex px-1 flex-col items-center justify-center select-none'>
                            {Array.from({ length: 10 }, (_, index) => index).map(i => (
                                <div onClick={() => setPagination({ ...pagination, pageSize: i + 1 })} className={cn("w-full p-2 rounded text-center hover:bg-appcard", i + 1 === pagination.pageSize ? "bg-appcard" : "")} key={i}>{i + 1}</div>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div>
                    <Pagination currentPage={pagination.pageIndex} onPageChange={(num: number) => table.setPageIndex(num)} totalPages={Math.ceil(count / pagination.pageSize)} />
                </div>
            </div>
        </div>
    )
}

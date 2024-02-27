"use client"

import {
    ColumnDef,
    ColumnFiltersState,
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
    Popover,
    PopoverContent,
    PopoverTrigger,
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
import { ChevronDown } from "lucide-react"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    filterKey: string,
}

export function DataTable<TData, TValue>({
    columns,
    data,
    filterKey
}: DataTableProps<TData, TValue>) {
    const [currentPage, setCurrentPage] = useState(1)
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
        []
    )
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
        state: {
            sorting,
            columnFilters
        },
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto bg-indigo-800 bg-opacity-5 hover:bg-indigo-100">
                            Filter <ChevronDown className="ml-2 h-4 w-4" />
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
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
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
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
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
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant={"default"} className="bg-indigo-800 bg-opacity-5 hover:bg-indigo-100  rounded-md justify-center items-center gap-2 inline-flex">
                                <p className="text-center text-indigo-800  text-sm font-normal  leading-normal">7</p>
                                <ChevronDownIcon />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className='flex flex-col items-center justify-center w-full select-none'>
                            {Array.from({ length: 5 }, (_, index) => index).map(i => (
                                <p className="w-8 p-2 rounded text-center hover:bg-appcard" key={i}>{i + 1}</p>
                            ))}
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Pagination currentPage={currentPage} onPageChange={(num: number) => setCurrentPage(num)} totalPages={12} />
                </div>
            </div>
        </div>
    )
}

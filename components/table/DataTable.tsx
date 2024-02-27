"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Button,

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

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [currentPage, setCurrentPage] = useState(1)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    })

    return (
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
            <div className="flex items-center justify-between space-x-2 p-4">
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

import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { MoreVertical } from "lucide-react";
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";


export const branchColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleBranch) => void, handleDelete?: (val: SampleBranch) => void, handleAssign?: (val: SampleBranch) => void) => ColumnDef<SampleBranch>[]
    = (t, handleEdit, handleDelete, handleAssign) => [
        {
            id: "select",
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),


        },
        {
            accessorKey: "name",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.BRANCH_NAME)}</div>,

            cell: ({ row }) => {
                const name: string = row.getValue("name");
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right justify-self-center">

                        <p className="text-sm line-clamp-1">{name}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "address",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.LOCATION)}</div>,

            cell: ({ row }) => {
                const location: string = row.getValue("address");
                return (
                    <TextColumn text={location} />
                )
            },
        },

        {
            accessorKey: "city",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.CITY)}</div>,

            cell: ({ row }) => {
                const city: string = row.getValue("city");
                return (
                    <TextColumn text={city} />
                )
            },
        },
        {
            accessorKey: "country",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.COUNTRY)}</div>,

            cell: ({ row }) => {
                const country: string = row.getValue("country");
                return (
                    <TextColumn text={country} />
                )
            },
        },
        {
            accessorKey: "isActive",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.STATUS)}</div>,

            cell: ({ row }) => {
                const isActive: boolean = row.getValue("isActive");
                return (
                    <TextColumn text={isActive ? "Active" : "Inactive"} />
                )
            },
        },


        {
            id: "actions",
            cell: ({ row }) => {
                const rowVal = row.original

                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreVertical className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>{t(messages.ACTIONS)}</DropdownMenuLabel>
                            <DropdownMenuItem onClick={handleAssign ? (e: any) => { e.stopPropagation(); handleAssign(rowVal) } : undefined} className="text-indigo-800 hover:bg-indigo-800 hover:bg-opacity-25">
                                {t(messages.ASSIGN_SERVICES)}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal) } : undefined} className="text-indigo-800 hover:bg-indigo-800 hover:bg-opacity-25">
                                {t(messages.EDIT)}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal) } : undefined} className="text-red-400 hover:bg-red-400 hover:bg-opacity-25">
                                {t(messages.DELETE)}
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },

    ]
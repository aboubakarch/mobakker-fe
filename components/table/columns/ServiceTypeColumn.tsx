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
import Image from "next/image";
import { isValidImageSrc } from "@/lib/helpers";


export const serviceTypeColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: ServiceType) => void, handleDelete?: (val: ServiceType) => void) => ColumnDef<ServiceType>[]
    = (t, handleEdit, handleDelete) => [
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
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.NAME)}</div>,

            cell: ({ row }) => {

                const rowItem = row.original
                return (
                    <div className="flex gap-3 items-center justify-center w-max">
                        <div className="rounded-full h-11 w-11 relative">
                            <Image
                                src={isValidImageSrc(rowItem.avatar) ? rowItem.avatar : "/assets/profilePlaceholder.png"}
                                alt="pfp"
                                fill
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col text-sm font-medium leading-snug">
                            <p className="text-gray-900">{rowItem.name}</p>
                        </div>
                    </div>
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
                            <DropdownMenuItem onClick={handleEdit ? () => handleEdit(rowVal) : undefined} className="text-indigo-800 hover:bg-indigo-800 hover:bg-opacity-25">
                                {t(messages.EDIT)}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleDelete ? () => handleDelete(rowVal) : undefined} className="text-red-400 hover:bg-red-400 hover:bg-opacity-25">
                                {t(messages.DELETE)}
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },

    ]
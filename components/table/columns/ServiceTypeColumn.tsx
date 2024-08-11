import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";
import Image from "next/image";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { RoleType } from "@/constants/enums";


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
                                src={isValidImageSrc(rowItem.avatar || "") ? rowItem.avatar : "/assets/profilePlaceholder.png"}
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
                const role = getCookie("role")
                if (role === RoleType.BRANCH_MANAGER || role === RoleType.CUSTOMER_CARE || role === RoleType.SERVICE_PROVIDER) {
                    return null
                }


                return (
                    <TooltipProvider>
                        <div className="flex gap-2">

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <Edit className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t(messages.EDIT)}</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <Trash2 className="h-5 w-5 text-red-700" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t(messages.DELETE)}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </TooltipProvider>
                )
            },
        },

    ]
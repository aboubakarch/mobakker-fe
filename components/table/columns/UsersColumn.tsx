import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    Checkbox,
} from "@/components/ui"
import { Edit, MoreVertical, ShieldMinus, ShieldPlus, Trash2, UserCog2 } from "lucide-react";
import { messages, tableHeader } from "@/constants/constants";
import { TFunction } from "i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
import { RoleType } from "@/constants/enums";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const userColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleProvider) => void, handleDelete?: (val: SampleProvider) => void, onToggle?: (val: SampleProvider, active: boolean) => void) => ColumnDef<SampleProvider>[] =
    (t, handleEdit, handleDelete, onToggle) => [

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
            accessorKey: "firstName",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.NAME)}</div>,

            cell: ({ row }) => {
                const firstName: string = row.getValue("firstName");
                const lastName: string = row.original.lastName;
                const rowItem: any = row.original
                return (

                    <div className="flex gap-3 items-center justify-center w-max">
                        <div className="rounded-full h-11 w-11 relative">
                            <Image
                                src={rowItem.avatar && isValidImageSrc(rowItem.avatar) ? rowItem.avatar : '/assets/sampleImage.jpg'}
                                alt="pfp"
                                fill
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col text-sm font-medium leading-snug">
                            <p className="text-gray-900 dark:text-white">{`${firstName} ${lastName}`}</p>
                        </div>
                    </div>
                )
            },
        },

        {
            accessorKey: "email",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.EMAIL)}</div>,

            cell: ({ row }) => {
                const email: string = row.getValue("email");
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "phone",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.PHONE)}</div>,

            cell: ({ row }) => {
                const phone: string = row.getValue("phone");
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{phone}</p>
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
                    <p className="text-sm line-clamp-3">{isActive ? "Active" : "Inactive"}</p>

                )
            },
        },


        {
            id: "actions",
            cell: ({ row }) => {
                const rowVal = row.original
                const role = getCookie("role")
                console.log(role)
                if (role === RoleType.CUSTOMER_CARE) {
                    return null
                }

                return (
                    <TooltipProvider>
                        <div className="flex gap-2">
                            {(role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) &&
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button onClick={onToggle ? (e: any) => { e.stopPropagation(); onToggle(rowVal, rowVal.isVerified === "BLOCKED") } : undefined} variant="ghost" className={cn("h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5", rowVal.isVerified === "BLOCKED" ? "hover:bg-red-600" : "hover:bg-green-500")}>
                                            {rowVal.isVerified === "BLOCKED" ?

                                                <ShieldPlus className="h-5 w-5 text-green-500" /> :
                                                <ShieldMinus className="h-5 w-5 text-red-500" />
                                            }
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{t(rowVal.isVerified === "BLOCKED" ? "Unblock User" : "Block User")}</p>
                                    </TooltipContent>
                                </Tooltip>
                            }
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button disabled={!(row.original as any)?.isActive} onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <Edit className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t(messages.EDIT)}</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button disabled={!(row.original as any)?.isActive} onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <Trash2 className="h-5 w-5 text-red-700" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t(messages.DELETE)}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </TooltipProvider >

                )
            },
        },
    ]
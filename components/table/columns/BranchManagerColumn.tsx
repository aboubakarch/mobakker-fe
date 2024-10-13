import { ColumnDef } from "@tanstack/react-table";
import {
    Button,

} from "@/components/ui"
import { Edit, MoreVertical, Trash2, UserCog2 } from "lucide-react";
import { messages, tableHeader } from "@/constants/constants";
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { isValidImageSrc } from "@/lib/helpers";
import Image from "next/image";


export const branchManagerColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleProvider) => void, handleDelete?: (val: SampleProvider) => void, handleAssign?: (val: SampleProvider) => void) => ColumnDef<SampleProvider>[] =
    (t, handleEdit, handleDelete, handleAssign) => [
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
            header: () => <div className="text-left">{t(tableHeader.NAME)}</div>,

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
            header: () => <div className="text-left">{t(tableHeader.EMAIL)}</div>,

            cell: ({ row }) => {
                const email: string = row.getValue("email");
                return (
                    <div className="w-max flex items-center justify-center text-left justify-self-center">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "phone",
            header: () => <div className="text-left">{t(tableHeader.PHONE)}</div>,

            cell: ({ row }) => {
                const phone: string = row.getValue("phone");
                return (
                    <div className="w-max flex items-center justify-center text-left justify-self-center">

                        <p className="text-sm line-clamp-1">{phone}</p>
                    </div>
                )
            },
        },
        {
            accessorKey: "isActive",
            header: () => <div className="text-left">{t(tableHeader.STATUS)}</div>,

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


                return (
                    <TooltipProvider>
                        <div className="flex gap-2">
                            {/* <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button disabled={!(row.original as any)?.isActive} onClick={handleAssign ? (e: any) => { e.stopPropagation(); handleAssign(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <UserCog2 className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t("Assign Branch")}</p>
                                </TooltipContent>
                            </Tooltip> */}
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
                    </TooltipProvider>
                )
            },
        },


    ]
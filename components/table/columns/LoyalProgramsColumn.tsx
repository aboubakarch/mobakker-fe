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
import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { TFunction } from "i18next";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { RoleType } from "@/constants/enums";
// import { Checkbox } from "@/components/ui/Checkbox";


export const loyalProgramsColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleLoyalPrograms) => void, handleDelete?: (val: SampleLoyalPrograms) => void) => ColumnDef<SampleLoyalPrograms>[] =
    (t, handleEdit, handleDelete) => [

        {
            accessorKey: "branch",
            header: () => <div className="text-left">{t(tableHeader.BRANCH_NAME)}</div>,

            cell: ({ row }) => {
                const rowItem: SampleBranch = row.getValue("branch");
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
                            <p className="text-gray-900 dark:text-white">{rowItem.name}</p>
                            <p className="text-indigo-800">{rowItem.city}</p>
                        </div>
                    </div>
                )
            },
        },
        {
            accessorKey: "noOfBooking",
            header: () => <div className="text-left">{t(tableHeader.TOTAL_BOOKING)}</div>,

            cell: ({ row }) => {
                const noOfBooking: string = row.getValue("noOfBooking");
                return (
                    <Badge text={noOfBooking} />
                )
            },
        },
        {
            accessorKey: "rating",
            header: () => <div className="text-left">{t(tableHeader.RATING)}</div>,

            cell: ({ row }) => {
                const rating: string = row.getValue("rating");
                return (
                    <Badge text={rating} containerStyle="bg-emerald-500" textStyle="text-emerald-500" />
                )
            },
        },


        {
            id: "actions",
            cell: ({ row }) => {
                const rowVal = row.original
                const role = getCookie("role")
                if (role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) {
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
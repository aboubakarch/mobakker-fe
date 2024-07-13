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
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { isValidImageSrc } from "@/lib/helpers";


export const serviceColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleServices) => void, handleDelete?: (val: SampleServices) => void
) => ColumnDef<SampleServices>[] = (t, handleEdit, handleDelete) => [
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
        header: () => <div >{t(tableHeader.SERVICE_NAME)}</div>,
        cell: ({ row }) => {
            const rowItem = row.original
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
                        <p className="text-gray-900">{rowItem.name}</p>
                    </div>
                </div>
            )
        },
    },
    // {
    //     accessorKey: "details",
    //     header: () => <div >{t(tableHeader.DETAILS)}</div>,

    //     cell: ({ row }) => {
    //         const details: string = row.getValue("details");
    //         return (
    //             <p className="text-sm line-clamp-2 w-44">{details}</p>
    //         )
    //     },
    // },
    {
        accessorKey: "serviceType",
        header: () => <div >{t(tableHeader.SERVICE_TYPE)}</div>,

        cell: ({ row }) => {
            const serviceType: ServiceType = row.getValue("serviceType");
            return (
                <TextColumn text={serviceType.name} />
            )
        },
    },
    {
        accessorKey: "availablity",
        header: () => <div >{t(tableHeader.AVAILABLE)}</div>,

        cell: ({ row }) => {
            let availablity: any = row.getValue("availablity")
            availablity = availablity.split(",");
            return (
                <div className="grid grid-rows-2 grid-cols-4 gap-3 items-center">
                    {availablity.map((a: any, i: number) => (
                        <div className={"p-2  rounded justify-center items-center text-white text-[9px] font-medium leading-tight text-center bg-indigo-800"} key={i}>{a}</div>
                    ))}
                </div>
            )
        },
    },
    {
        accessorKey: "slotTime",
        header: () => <div >{t(tableHeader.TIME_SLOT)}</div>,

        cell: ({ row }) => {
            const timeSlot: string = row.getValue("slotTime");
            return (
                <Badge containerStyle="bg-emerald-500" textStyle="text-emerald-500" text={timeSlot} />
            )
        },
    },
    {
        accessorKey: "workHourFrom",
        header: () => <div >{t(tableHeader.WORKING_HOURS)}</div>,

        cell: ({ row }) => {
            const workingHours: string = row.getValue("workHourFrom");
            const workingHoursTo: string = row.original.workHourTo;

            return (
                <TextColumn text={`${workingHours} to ${workingHoursTo}`} />
            )
        },
    },
    {
        accessorKey: "price",
        header: () => <div >{t(tableHeader.PRICE)}</div>,

        cell: ({ row }) => {
            const price: number = row.getValue("price");
            return (
                <TextColumn text={`${price} S.R`} />
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
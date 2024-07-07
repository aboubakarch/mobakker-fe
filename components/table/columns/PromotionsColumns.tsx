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
// import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { Switch } from "@/components/ui/Switch";
import { TFunction } from "i18next";
// import { Checkbox } from "@/components/ui/Checkbox";


export const promotionsColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SamplePromotions) => void, handleDelete?: (val: SamplePromotions) => void, onToggle?: (id: string, val: boolean) => void) => ColumnDef<SamplePromotions>[] =
    (t, handleEdit, handleDelete, onToggle) => [

        {
            accessorKey: "promoCode",
            header: () => <div className="">{t(tableHeader.PROMOTION_NAME)}</div>,

            cell: ({ row }) => {
                const promotionName: string = row.getValue("promoCode");
                return (
                    <div className="w-max flex items-center justify-center  justify-self-center">

                        <p className="text-sm line-clamp-1">{promotionName}</p>
                    </div>
                )
            },
        },
        {
            accessorKey: "description",
            header: () => <div className="text-left">{t(tableHeader.DETAILS)}</div>,

            cell: ({ row }) => {
                const description: string = row.getValue("description");
                return (
                    <p className="text-sm line-clamp-3">{description}</p>

                )
            },
        },
        {
            accessorKey: "startDate",
            header: () => <div className="">{t(tableHeader.START_DATE)}</div>,

            cell: ({ row }) => {
                const startDate: string = row.getValue("startDate");
                return (
                    <div className="w-max flex items-center justify-center ">
                        <p className="text-sm line-clamp-1 ">{startDate}</p>
                    </div>
                )
            },
        },
        {
            accessorKey: "endDate",
            header: () => <div className="">{t(tableHeader.END_DATE)}</div>,

            cell: ({ row }) => {
                const endDate: string = row.getValue("endDate");
                return (
                    <div className="w-max flex items-center justify-center  justify-self-center">
                        <p className="text-sm line-clamp-1">{endDate}</p>
                    </div>
                )
            },
        },
        // {
        //     accessorKey: "serviceName",
        //     header: () => <div className="">{t(tableHeader.SERVICE_NAME)}</div>,
        //     cell: ({ row }) => {
        //         const rowItem = row.original
        //         return (
        //             <div className="w-max flex gap-3 items-center justify-center">
        //                 <div className="rounded-full h-11 w-11 relative">
        //                     <Image
        //                         src={rowItem.servicePicture}
        //                         alt="pfp"
        //                         fill
        //                         className="rounded-full"
        //                     />
        //                 </div>
        //                 <div className="flex flex-col text-sm font-medium leading-snug">
        //                     <p className="text-gray-900">{rowItem.serviceName}</p>
        //                 </div>
        //             </div>
        //         )
        //     },
        // },
        {
            accessorKey: "services",
            header: () => <div className="">{t(tableHeader.SERVICE_NAME)}</div>,

            cell: ({ row }) => {
                const services: any[] = row.getValue("services");
                return (
                    <TextColumn text={services.length} />
                )
            },
        },
        // {
        //     accessorKey: "branchName",
        //     header: () => <div className="">{t(tableHeader.BRANCH_NAME)}</div>,

        //     cell: ({ row }) => {
        //         const branchName: string = row.getValue("branchName")
        //         return (
        //             <TextColumn text={branchName} />
        //         )
        //     }
        // },
        {
            accessorKey: "type",
            header: () => <div className="">{t(tableHeader.TYPE)}</div>,

            cell: ({ row }) => {
                const type: string = row.getValue("type");
                return (
                    <Badge text={type} />
                )
            },
        },
        // {
        //     accessorKey: "availableCount",
        //     header: () => <div className="">{t(tableHeader.AVAILABLE)}</div>,

        //     cell: ({ row }) => {
        //         const availableCount: string = row.getValue("availableCount");
        //         return (
        //             <TextColumn text={availableCount} />
        //         )
        //     },
        // },
        {
            accessorKey: "isActive",
            header: () => <div className="">{t(tableHeader.STATUS)}</div>,

            cell: ({ row }) => {
                const status: boolean = row.getValue("isActive");
                const id = row.original.id
                return (
                    <Switch className='data-[state=checked]:bg-indigo-800 data-[state=unchecked]:bg-red-400 ' checked={status} onCheckedChange={(checked: boolean) => {
                        if (onToggle) {
                            onToggle(id || "", checked)
                        }
                    }} />
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
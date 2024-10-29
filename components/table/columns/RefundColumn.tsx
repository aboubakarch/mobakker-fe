import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { Edit, MailPlus, MoreVertical, TicketSlash, Trash2 } from "lucide-react";
// import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { TFunction } from "i18next";
import Image from "next/image";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
// import { Checkbox } from "@/components/ui/Checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import { RoleType } from "@/constants/enums";

const statusOptions = [
    { name: "Pending", value: "PENDING" },
    { name: "Approved", value: "APPROVED" },
    { name: "Rejected", value: "REJECTED" }
];

export const refundColumns: (
    t: TFunction<"translation", undefined>,
    onStatusChange?: (val: Refund, status: string) => void,
) => ColumnDef<Refund>[] = (t, onStatusChange) => ([
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value: any) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),


    // },
    {
        accessorKey: "transactionId",
        header: () => <div className="text-left">{t("Transaction ID")}</div>,
        cell: ({ row }) => {
            const transactionID: string = row.getValue("transactionId");
            return (
                <div className="w-max flex items-center justify-center text-left">
                    <p className="text-sm line-clamp-1">{transactionID}</p>
                </div>
            );
        },
    },
    {
        accessorKey: "appointment.service",
        header: () => <div className="text-left">{t(tableHeader.SERVICES_BOOKED)}</div>,
        cell: ({ row }) => {
            const rowItem: SampleServices = row.original?.appointment?.services || (row?.original?.appointment as any).service;
            if (!rowItem) {
                return null
            }
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
                        <p className="text-indigo-800">{rowItem.price}</p>
                    </div>
                </div>
            )
        },
    },

    {
        accessorKey: "appointment.branch",
        header: () => <div className="text-left">{t(tableHeader.BRANCH_NAME)}</div>,

        cell: ({ row }) => {
            const rowItem: SampleBranch = row.original.appointment?.branch;
            if (!rowItem) {
                return null
            }
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
        accessorKey: "customer",
        header: () => <div className="text-left">{t(tableHeader.CUSTOMER_NAME)}</div>,

        cell: ({ row }) => {
            const customerNumber: any = row.getValue("customer");
            return (
                <div className="w-max flex items-center justify-center text-left ">
                    <p className="text-sm line-clamp-1">{customerNumber?.user ? `${customerNumber?.user?.firstName || ""} ${customerNumber?.user?.lastName || ""}` : customerNumber.id}</p>
                </div>
            )
        },
    },

    {
        accessorKey: "createdBy",
        header: () => <div className="text-left">{t("Initiated By")}</div>,

        cell: ({ row }) => {
            const createdBy: any = row.getValue("createdBy");
            return (
                <div className="w-max flex items-center justify-center text-left ">
                    <p className="text-sm line-clamp-1">{`${createdBy?.firstName || ""} ${createdBy?.lastName || ""}`}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-left">{t("Amount")}</div>,
        cell: ({ row }) => {
            const amount: number = row.getValue("amount");
            return (
                <div className="w-max flex items-center justify-center text-left">
                    <p className="text-sm">${amount.toFixed(2)}</p>
                </div>
            );
        },
    },
    // {
    //     accessorKey: "paymentMethod",
    //     header: () => <div className="text-left">{t("Payment Method")}</div>,
    //     cell: ({ row }) => {
    //         const paymentMethod: string = row.getValue("paymentMethod");
    //         return <TextColumn text={paymentMethod} />;
    //     },
    // },
    // {
    //     accessorKey: "transactionDate",
    //     header: () => <div className="text-left">{t("Date")}</div>,
    //     cell: ({ row }) => {
    //         const transactionDate: string = row.getValue("transactionDate");
    //         return <TextColumn text={transactionDate} />;
    //     },
    // },

    {
        accessorKey: "status",
        header: () => <div className="text-left">{t(tableHeader.STATUS)}</div>,

        cell: ({ row }) => {
            const status: any = row.getValue("status");
            const original: any = row.original;
            const role = getCookie("role")

            return (
                // <Button className='bg-red-500 hover:bg-red-400' onClick={(e) => { e.stopPropagation(); if (onAppointmentChange) { onAppointmentChange(val) } }} >
                //     Cancel
                // </Button>
                <Select disabled={status !== "PENDING"} onValueChange={(val) => { if (onStatusChange) { onStatusChange(original, val) } }} value={status} defaultValue={status}>
                    <SelectTrigger className={cn("flex gap-2 w-48 text-white", status === "REJECTED" ? "bg-red-500" : status === "PENDING" ? "bg-yellow-500" : status === "APPROVED" ? "bg-green-600" : "")}>
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {statusOptions.map(item => (
                            <SelectItem key={item.value} value={`${item.value}`}>{item.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            )
        },
    },




    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const rowVal = row.original
    //         const role = getCookie("role")
    //         if (role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) {
    //             return null
    //         }


    //         return (
    //             <TooltipProvider>
    //                 <div className="flex gap-2">
    //                     <Tooltip>
    //                         <TooltipTrigger asChild>
    //                             <Button onClick={onSendNotification ? (e: any) => { e.stopPropagation(); onSendNotification(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
    //                                 <MailPlus className="h-5 w-5 text-indigo-800" />
    //                             </Button>
    //                         </TooltipTrigger>
    //                         <TooltipContent>
    //                             <p>{t("Send Notification")}</p>
    //                         </TooltipContent>
    //                     </Tooltip>

    //                     <Tooltip>
    //                         <TooltipTrigger asChild>
    //                             <Button disabled={rowVal.paymentStatus === "PENDING" && rowVal.paymentType !== "CARD"} onClick={onRefund ? (e: any) => { e.stopPropagation(); onRefund(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
    //                                 <TicketSlash className="h-5 w-5 text-indigo-800" />
    //                             </Button>
    //                         </TooltipTrigger>
    //                         <TooltipContent>
    //                             <p>{t("Refund")}</p>
    //                         </TooltipContent>
    //                     </Tooltip>

    //                     <Tooltip>
    //                         <TooltipTrigger asChild>
    //                             <Button onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
    //                                 <Edit className="h-5 w-5 text-indigo-800" />
    //                             </Button>
    //                         </TooltipTrigger>
    //                         <TooltipContent>
    //                             <p>{t(messages.EDIT)}</p>
    //                         </TooltipContent>
    //                     </Tooltip>
    //                     <Tooltip>
    //                         <TooltipTrigger asChild>
    //                             <Button onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
    //                                 <Trash2 className="h-5 w-5 text-red-700" />
    //                             </Button>
    //                         </TooltipTrigger>
    //                         <TooltipContent>
    //                             <p>{t(messages.DELETE)}</p>
    //                         </TooltipContent>
    //                     </Tooltip>
    //                 </div>
    //             </TooltipProvider>
    //         )
    //     },
    // },

])
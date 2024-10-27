import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { Edit, MailPlus, MoreVertical, TicketSlash, Trash2, Loader2Icon, PlayCircle, CheckCircle, Ban, GitPullRequestClosedIcon, Star, BadgePlus, CircleDollarSign } from "lucide-react";
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

export enum AppointmentStatus {
    PENDING = 'PENDING',
    STARTED = 'STARTED',
    COMPLETED = 'COMPLETED',
    CANCELED = 'CANCELED',
    REJECTED = 'REJECTED',
    APPROVED = 'APPROVED',
    RATED = 'RATED',
    CREATED = 'CREATED',
    PAID = 'PAID',
}
export const statusOptions = [
    { name: "Created", value: AppointmentStatus.CREATED },
    { name: "Pending", value: AppointmentStatus.PENDING },
    { name: "Approved", value: AppointmentStatus.APPROVED },
    { name: "Paid", value: AppointmentStatus.PAID },
    { name: "Started", value: AppointmentStatus.STARTED },
    { name: "Completed", value: AppointmentStatus.COMPLETED },
    { name: "Canceled", value: AppointmentStatus.CANCELED },
    { name: "Rejected", value: AppointmentStatus.REJECTED },
    { name: "Rated", value: AppointmentStatus.RATED },
];

export const statusColors = {
    [AppointmentStatus.PENDING]: "bg-yellow-500",
    [AppointmentStatus.STARTED]: "bg-indigo-800",
    [AppointmentStatus.COMPLETED]: "bg-green-600",
    [AppointmentStatus.CANCELED]: "bg-red-500",
    [AppointmentStatus.REJECTED]: "bg-red-500",
    [AppointmentStatus.APPROVED]: "bg-blue-500",
    [AppointmentStatus.RATED]: "bg-purple-500",
    [AppointmentStatus.CREATED]: "bg-gray-400",
    [AppointmentStatus.PAID]: "bg-teal-500",
};
export const statusIcons = {
    [AppointmentStatus.PENDING]: <Loader2Icon className="w-6 h-6 text-white " />,
    [AppointmentStatus.STARTED]: <PlayCircle className="w-6 h-6 text-white" />,
    [AppointmentStatus.COMPLETED]: <CheckCircle className="w-6 h-6 text-white" />,
    [AppointmentStatus.CANCELED]: <Ban className="w-6 h-6 text-white" />,
    [AppointmentStatus.REJECTED]: <GitPullRequestClosedIcon className="w-6 h-6 text-white" />,
    [AppointmentStatus.APPROVED]: <CheckCircle className="w-6 h-6 text-white" />,
    [AppointmentStatus.RATED]: <Star className="w-6 h-6 text-white" />,
    [AppointmentStatus.CREATED]: <BadgePlus className="w-6 h-6 text-white" />,
    [AppointmentStatus.PAID]: <CircleDollarSign className="w-6 h-6 text-white" />,
};

export const appointmentsColumns: (
    t: TFunction<"translation", undefined>,
    handleEdit?: (val: SampleAppointments) => void,
    handleDelete?: (val: SampleAppointments) => void,
    onAppointmentChange?: (val: SampleAppointments, status: string) => void,
    onSendNotification?: (val: SampleAppointments) => void,
    onRefund?: (val: SampleAppointments) => void,
) => ColumnDef<SampleAppointments>[] = (t, handleEdit, handleDelete, onAppointmentChange, onSendNotification, onRefund) => ([
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
        accessorKey: "id",
        header: () => <div className="text-left">{t(tableHeader.BOOKING_ID)}</div>,

        cell: ({ row }) => {
            const bookingId: string = row.getValue("id");
            return (
                <div className="w-max flex items-center justify-center text-left justify-self-center">

                    <p className="text-sm line-clamp-1">{bookingId}</p>
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
                <div className="w-max flex items-center justify-center text-left justify-self-center">
                    <p className="text-sm line-clamp-1">{customerNumber?.user ? `${customerNumber?.user?.firstName || ""} ${customerNumber?.user?.lastName || ""}` : customerNumber.id}</p>
                </div>
            )
        },
    },

    {
        accessorKey: "services",
        header: () => <div className="text-left">{t(tableHeader.SERVICES_BOOKED)}</div>,
        cell: ({ row }) => {
            const rowItem: SampleServices = row.getValue("services");
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
    // {
    //     accessorKey: "serviceType",
    //     header: () => <div className="text-left">{t(tableHeader.SERVICE_TYPE)}</div>,

    //     cell: ({ row }) => {
    //         const serviceType: string = row.getValue("serviceType");
    //         return (
    //             <TextColumn text={serviceType} />
    //         )
    //     },
    // },
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
        accessorKey: "bookingSlot",
        header: () => <div className="text-left">{t(tableHeader.TIME_SLOT)}</div>,

        cell: ({ row }) => {
            const bookingSlot: string = row.getValue("bookingSlot");
            return (
                <Badge text={bookingSlot} />
            )
        },
    },
    // {
    //     accessorKey: "",
    //     header: () => <div className="text-left">{t(tableHeader.TIME)}</div>,

    //     cell: ({ row }) => {
    //         const hours: string = row.getValue("hours");
    //         return (
    //             <TextColumn text={hours[0]} />
    //         )
    //     },
    // },
    {
        accessorKey: "bookingDate",
        header: () => <div className="text-left">{t(tableHeader.START_DATE)}</div>,

        cell: ({ row }) => {
            const bookingDate: number = row.getValue("bookingDate");
            return (
                <TextColumn text={`${bookingDate}`} />
            )
        },
    },
    {
        accessorKey: "paymentStatus",
        header: () => <div className="text-left">{t(tableHeader.PAID)}</div>,

        cell: ({ row }) => {
            const paymentStatus: number = row.getValue("paymentStatus");
            return (
                <TextColumn text={`${paymentStatus}`} />
            )
        },
    },
    {
        accessorKey: "paymentType",
        header: () => <div className="text-left">{t(tableHeader.PAID)}</div>,

        cell: ({ row }) => {
            const paymentType: number = row.getValue("paymentType");
            return (
                <TextColumn text={`${paymentType}`} />
            )
        },
    },
    // {
    //     accessorKey: "status",
    //     header: () => <div className="text-left">{t(tableHeader.STATUS)}</div>,

    //     cell: ({ row }) => {
    //         const status: number = row.getValue("status");
    //         return (
    //             <TextColumn text={`${status}`} />
    //         )
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
                <Select disabled={status === "CANCELLED" || status === "REJECTED" || status === "COMPLETED" || role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN} onValueChange={(val) => { if (onAppointmentChange) { onAppointmentChange(original, val) } }} value={status} defaultValue={status}>
                    <SelectTrigger className={cn("flex gap-2 text-white", statusColors[status as keyof typeof statusColors] || "")}>
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
                                <Button onClick={onSendNotification ? (e: any) => { e.stopPropagation(); onSendNotification(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                    <MailPlus className="h-5 w-5 text-indigo-800" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t("Send Notification")}</p>
                            </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button disabled={rowVal.paymentStatus === "PENDING" && rowVal.paymentType !== "CARD"} onClick={onRefund ? (e: any) => { e.stopPropagation(); onRefund(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                    <TicketSlash className="h-5 w-5 text-indigo-800" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t("Refund")}</p>
                            </TooltipContent>
                        </Tooltip>

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

])
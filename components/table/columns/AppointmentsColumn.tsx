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
import { TFunction } from "i18next";
import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox";


export const appointmentsColumns: (
    t: TFunction<"translation", undefined>,
    handleEdit?: (val: SampleAppointments) => void,
    handleDelete?: (val: SampleAppointments) => void,
    onAppointmentChange?: (val: SampleAppointments) => void
) => ColumnDef<SampleAppointments>[] = (t, handleEdit, handleDelete, onAppointmentChange) => ([
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
        header: () => <div className="text-center">{t(tableHeader.BOOKING_ID)}</div>,

        cell: ({ row }) => {
            const bookingId: string = row.getValue("id");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{bookingId}</p>
                </div>
            )
        },
    },

    {
        accessorKey: "services",
        header: () => <div className="text-center">{t(tableHeader.SERVICES_BOOKED)}</div>,
        cell: ({ row }) => {
            const rowItem: SampleServices = row.getValue("services");
            return (
                <div className="flex gap-3 items-center justify-center w-max">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={"/assets/sampleImage.jpg"}
                            alt="pfp"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-snug">
                        <p className="text-gray-900">{rowItem.name}</p>
                        <p className="text-indigo-800">{rowItem.price}</p>
                    </div>
                </div>
            )
        },
    },
    // {
    //     accessorKey: "serviceType",
    //     header: () => <div className="text-center">{t(tableHeader.SERVICE_TYPE)}</div>,

    //     cell: ({ row }) => {
    //         const serviceType: string = row.getValue("serviceType");
    //         return (
    //             <TextColumn text={serviceType} />
    //         )
    //     },
    // },
    {
        accessorKey: "branch",
        header: () => <div className="text-center">{t(tableHeader.BRANCH_NAME)}</div>,

        cell: ({ row }) => {
            const rowItem: SampleBranch = row.getValue("branch");
            return (
                <div className="flex gap-3 items-center justify-center w-max">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={"/assets/sampleImage.jpg"}
                            alt="pfp"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-snug">
                        <p className="text-gray-900">{rowItem.name}</p>
                        <p className="text-indigo-800">{rowItem.city}</p>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "bookingSlot",
        header: () => <div className="text-center">{t(tableHeader.TIME_SLOT)}</div>,

        cell: ({ row }) => {
            const bookingSlot: string = row.getValue("bookingSlot");
            return (
                <Badge text={bookingSlot} />
            )
        },
    },
    // {
    //     accessorKey: "",
    //     header: () => <div className="text-center">{t(tableHeader.TIME)}</div>,

    //     cell: ({ row }) => {
    //         const hours: string = row.getValue("hours");
    //         return (
    //             <TextColumn text={hours[0]} />
    //         )
    //     },
    // },
    {
        accessorKey: "bookingDate",
        header: () => <div className="text-center">{t(tableHeader.START_DATE)}</div>,

        cell: ({ row }) => {
            const bookingDate: number = row.getValue("bookingDate");
            return (
                <TextColumn text={`${bookingDate}`} />
            )
        },
    },
    {
        accessorKey: "paymentStatus",
        header: () => <div className="text-center">{t(tableHeader.PAID)}</div>,

        cell: ({ row }) => {
            const paymentStatus: number = row.getValue("paymentStatus");
            return (
                <TextColumn text={`${paymentStatus}`} />
            )
        },
    },
    {
        accessorKey: "paymentType",
        header: () => <div className="text-center">{t(tableHeader.PAID)}</div>,

        cell: ({ row }) => {
            const paymentType: number = row.getValue("paymentType");
            return (
                <TextColumn text={`${paymentType}`} />
            )
        },
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">{t(tableHeader.STATUS)}</div>,

        cell: ({ row }) => {
            const status: number = row.getValue("status");
            return (
                <TextColumn text={`${status}`} />
            )
        },
    },

    {
        accessorKey: "customer",
        header: () => <div className="text-center">{t(tableHeader.CUSTOMER_NUMBER)}</div>,

        cell: ({ row }) => {
            const customerNumber: SampleBranchManager = row.getValue("customer");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">
                    <p className="text-sm line-clamp-1">{customerNumber.id}</p>
                </div>
            )
        },
    },
    {
        id: "statusChange",
        // accessorKey: "price",

        cell: ({ row }) => {
            const val = row.original
            return (
                <Button className='bg-red-500 hover:bg-red-400' onClick={() => { if (onAppointmentChange) { onAppointmentChange(val) } }} >
                    Cancel
                </Button>
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

])
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
        accessorKey: "bookingId",
        header: () => <div className="text-center">{t(tableHeader.BOOKING_ID)}</div>,

        cell: ({ row }) => {
            const bookingId: string = row.getValue("bookingId");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{bookingId}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "name",
        header: () => <div className="text-center">{t(tableHeader.CUSTOMER_NAME)}</div>,

        cell: ({ row }) => {
            const name: string = row.getValue("name");
            return (
                <div className="w-max flex items-center justify-center text-center">
                    <p className="text-sm line-clamp-1 ">{name}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "customerNumber",
        header: () => <div className="text-center">{t(tableHeader.CUSTOMER_NUMBER)}</div>,

        cell: ({ row }) => {
            const customerNumber: number = row.getValue("customerNumber");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">
                    <p className="text-sm line-clamp-1">{customerNumber}</p>
                </div>
            )
        },
    },
    // {
    //     accessorKey: "serviceBooked",
    //     header: () => <div className="text-center">{t(tableHeader.SERVICES_BOOKED)}</div>,
    //     cell: ({ row }) => {
    //         const rowItem = row.original
    //         return (
    //             <div className="w-max flex gap-3 items-center justify-center">
    //                 {/* <div className="rounded-full h-11 w-11 relative">
    //                     <Image
    //                         src={rowItem.}
    //                         alt="pfp"
    //                         fill
    //                         className="rounded-full"
    //                     />
    //                 </div> */}
    //                 <div className="flex flex-col text-sm font-medium leading-snug">
    //                     {/* <p className="text-gray-900">{rowItem.serviceBooked}</p>
    //                     <p className="text-gray-900">{rowItem.serviceTime}</p> */}
    //                 </div>
    //             </div>
    //         )
    //     },
    // },
    {
        accessorKey: "serviceType",
        header: () => <div className="text-center">{t(tableHeader.SERVICE_TYPE)}</div>,

        cell: ({ row }) => {
            const serviceType: string = row.getValue("serviceType");
            return (
                <TextColumn text={serviceType} />
            )
        },
    },
    {
        accessorKey: "branchName",
        header: () => <div className="text-center">{t(tableHeader.BRANCH_NAME)}</div>,

        cell: ({ row }) => {
            const branchName: string = row.getValue("branchName")
            return (
                <TextColumn text={branchName} />
            )
        }
    },
    {
        accessorKey: "serviceTime",
        header: () => <div className="text-center">{t(tableHeader.TIME_SLOT)}</div>,

        cell: ({ row }) => {
            const serviceTime: string = row.getValue("serviceTime");
            return (
                <Badge text={serviceTime} />
            )
        },
    },
    {
        accessorKey: "hours",
        header: () => <div className="text-center">{t(tableHeader.TIME)}</div>,

        cell: ({ row }) => {
            const hours: string = row.getValue("hours");
            return (
                <TextColumn text={hours[0]} />
            )
        },
    },
    {
        accessorKey: "price",
        header: () => <div className="text-center">{t(tableHeader.PRICE)}</div>,

        cell: ({ row }) => {
            const price: number = row.getValue("price");
            return (
                <TextColumn text={`${price} S.R`} />
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

])
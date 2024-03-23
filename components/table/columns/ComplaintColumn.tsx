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
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { TFunction } from "i18next";
// import { Checkbox } from "@/components/ui/Checkbox";


export const complaintColumns: (t: TFunction<"translation", undefined>) => ColumnDef<SampleComplaint>[] = (t: TFunction<"translation", undefined>) => [

    {
        accessorKey: "complaint",
        header: () => <div className="text-center">{t(tableHeader.COMPLAINT)}</div>,

        cell: ({ row }) => {
            const complaint: string = row.getValue("complaint");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{complaint}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "customerName",
        header: () => <div className="text-center">{t(tableHeader.LOYAL_CUSTOMER)}</div>,

        cell: ({ row }) => {
            const customerName: string = row.getValue("customerName");
            return (
                <div className="w-max flex items-center justify-center text-center">
                    <p className="text-sm line-clamp-1 ">{customerName}</p>
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

    {
        accessorKey: "customerType",
        header: () => <div className="text-center">{t(tableHeader.TYPE_USER)}</div>,

        cell: ({ row }) => {
            const customerType: string = row.getValue("customerType");
            return (
                <Badge text={customerType} />
            )
        },
    },
    {
        accessorKey: "complainMessage",
        header: () => <div className="text-center">{t(tableHeader.COMPLAINT_MESSAGE)}</div>,

        cell: ({ row }) => {
            const complainMessage: string = row.getValue("complainMessage");
            return (
                <p className="text-sm line-clamp-2 w-48">{complainMessage}</p>
            )
        },
    },

    {
        accessorKey: "city",
        header: () => <div className="text-center">{t(tableHeader.CITY)}</div>,

        cell: ({ row }) => {
            const city: string = row.getValue("city")
            return (
                <TextColumn text={city} />
            )
        }
    },

    {
        accessorKey: "bookingId",
        header: () => <div className="text-center">{t(tableHeader.BOOKING_ID_SUB)}</div>,

        cell: ({ row }) => {
            const bookingId: string = row.getValue("bookingId")
            return (
                <TextColumn text={bookingId} />
            )
        }
    },

    {
        id: "actions",
        cell: () => {
            // const row = row.original()

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{messages.ACTIONS}</DropdownMenuLabel>
                        <DropdownMenuItem className="text-indigo-800 hover:bg-indigo-800 hover:bg-opacity-25">
                            {messages.EDIT}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-400 hover:bg-red-400 hover:bg-opacity-25">
                            {messages.DELETE}
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]
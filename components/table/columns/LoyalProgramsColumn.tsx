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
import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
// import { Checkbox } from "@/components/ui/Checkbox";


export const loyalProgramsColumns: ColumnDef<SampleLoyalPrograms>[] = [

    {
        accessorKey: "rank",
        header: () => <div className="text-center">{tableHeader.RANK}</div>,

        cell: ({ row }) => {
            const rank: string = row.getValue("rank");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{rank}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "customerName",
        header: () => <div className="text-center">{tableHeader.LOYAL_CUSTOMER}</div>,

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
        header: () => <div className="text-center">{tableHeader.CUSTOMER_NUMBER}</div>,

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
        accessorKey: "serviceBooked",
        header: () => <div className="text-center">{tableHeader.MOST_BOOKED}</div>,
        cell: ({ row }) => {
            const rowItem = row.original
            return (
                <div className="w-max flex gap-3 items-center justify-center">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={rowItem.servicePicture}
                            alt="pfp"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-snug">
                        <p className="text-gray-900">{rowItem.serviceBooked}</p>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "serviceType",
        header: () => <div className="text-center">{tableHeader.SERVICE_TYPE}</div>,

        cell: ({ row }) => {
            const serviceType: string = row.getValue("serviceType");
            return (
                <TextColumn text={serviceType} />
            )
        },
    },
    {
        accessorKey: "branchName",
        header: () => <div className="text-center">{tableHeader.BRANCH_NAME}</div>,

        cell: ({ row }) => {
            const branchName: string = row.getValue("branchName")
            return (
                <TextColumn text={branchName} />
            )
        }
    },
    {
        accessorKey: "lastBooking",
        header: () => <div className="text-center">{tableHeader.LAST_BOOKING}</div>,

        cell: ({ row }) => {
            const lastBooking: string = row.getValue("lastBooking");
            return (
                <Badge text={lastBooking} />
            )
        },
    },
    {
        accessorKey: "rating",
        header: () => <div className="text-center">{tableHeader.TIME}</div>,

        cell: ({ row }) => {
            const rating: string = row.getValue("rating");
            return (
                <Badge text={rating} containerStyle="bg-emerald-500" textStyle="text-emerald-500" />
            )
        },
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
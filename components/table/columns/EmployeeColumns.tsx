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
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";


export const employeeColumns: ColumnDef<SampleEmployee>[] = [
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
        accessorKey: "name",
        header: () => <div className="text-center">{tableHeader.NAME}</div>,
        cell: ({ row }) => {
            const rowItem = row.original
            return (
                <div className="flex gap-3 items-center justify-center w-max">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={rowItem.profilePicture}
                            alt="pfp"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-snug">
                        <p className="text-gray-900">{rowItem.name}</p>
                        <p className="text-indigo-800">{rowItem.status}</p>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "jobDesc",
        header: () => <div className="text-center">{tableHeader.JOB_DESC}</div>,

        cell: ({ row }) => {
            const job: string = row.getValue("jobDesc");
            return (
                <Badge text={job} />
            )
        },
    },
    {
        accessorKey: "bookedToday",
        header: () => <div className="text-center">{tableHeader.BOOKED_TODAY}</div>,

        cell: ({ row }) => {
            const booking: string[] = row.getValue("bookedToday");
            return (
                <div className="grid grid-rows-2 grid-cols-4 gap-3 items-center">
                    {booking.map((book, i) => (
                        <div className={cn("p-2  rounded justify-center items-center text-white text-xs font-medium leading-tight text-center", i === (Math.floor(Math.random() * 8)) ? "bg-amber-400" : "bg-indigo-800")} key={i}>{book}</div>
                    ))}
                </div>
            )
        },
    },
    {
        accessorKey: "workingHours",
        header: () => <div className="text-center">{tableHeader.WORKING_HOURS}</div>,

        cell: ({ row }) => {
            const hours: string = row.getValue("workingHours")
            return (
                <TextColumn text={hours} />
            )
        }
    },
    {
        accessorKey: "rating",
        header: () => <div className="text-center">{tableHeader.RATING}</div>,

        cell: ({ row }) => {
            const rating: string = row.getValue("rating");
            return (
                <Badge containerStyle="bg-emerald-500" textStyle="text-emerald-500" text={rating} />
            )
        },
    },
    {
        id: "transfer",
        cell: () => {
            // const row = row.original()

            return (
                <div className="w-full flex items-center justify-center">
                    <Button variant="default" className="bg-indigo-800 hover:bg-indigo-500">
                        <p className="text-xs">Transfer</p>
                    </Button>
                </div>

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
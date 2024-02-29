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
export const columns: ColumnDef<SampleEmployee>[] = [
    {
        accessorKey: "name",
        header: () => <div className="text-center">Name</div>,
        cell: ({ row }) => {
            const rowItem = row.original
            return (
                <div className="flex gap-3 items-center justify-center">
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
        header: () => <div className="text-center">Job Description</div>,

        cell: ({ row }) => {
            const job: string = row.getValue("jobDesc");
            return (
                <div className="w-full flex items-center justify-center">
                    <div className="h-7 px-3 py-[3px] select-none bg-indigo-800 bg-opacity-10 rounded-[30px] justify-center items-center gap-px inline-flex">
                        <div className="text-indigo-800 text-xs font-medium leading-tight">{job}</div>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "bookedToday",
        header: () => <div className="text-center">Booked Today</div>,

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
        header: () => <div className="text-center">Working Hours</div>,

        cell: ({ row }) => {
            const hours: string = row.getValue("workingHours")
            return (
                <div className="w-full flex items-center justify-center">
                    <div className="text-gray-500 text-sm flex items-center font-normal leading-snug">{hours}</div>
                </div>
            )
        }
    },
    {
        accessorKey: "rating",
        header: () => <div className="text-center">Rating</div>,

        cell: ({ row }) => {
            const rating: string = row.getValue("rating");
            return (
                <div className="w-full flex items-center justify-center">
                    <div className="h-7 px-3 py-[3px] select-none bg-emerald-500 bg-opacity-10 rounded-[30px] justify-center items-center gap-px inline-flex">
                        <div className="text-emerald-500 text-xs font-medium leading-tight">{rating}</div>
                    </div>
                </div>
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
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                        >
                            Test
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]
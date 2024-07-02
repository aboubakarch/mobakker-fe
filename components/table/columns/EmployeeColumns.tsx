import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    Checkbox,
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
import { TFunction } from "i18next";


export const employeeColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleProvider) => void, handleDelete?: (val: SampleProvider) => void, handleAssign?: (val: SampleProvider) => void) => ColumnDef<SampleProvider>[] =
    (t, handleEdit, handleDelete, handleAssign) => [

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
            accessorKey: "firstName",
            header: () => <div className="text-center">{t(tableHeader.NAME)}</div>,

            cell: ({ row }) => {
                const firstName: string = row.getValue("firstName");
                const lastName: string = row.original.lastName;
                return (
                    <div className="w-max flex items-center justify-center text-center justify-self-center">

                        <p className="text-sm line-clamp-1">{`${firstName} ${lastName}`}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "email",
            header: () => <div className="text-center">{t(tableHeader.EMAIL)}</div>,

            cell: ({ row }) => {
                const email: string = row.getValue("email");
                return (
                    <div className="w-max flex items-center justify-center text-center justify-self-center">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "phone",
            header: () => <div className="text-center">{t(tableHeader.PHONE)}</div>,

            cell: ({ row }) => {
                const phone: string = row.getValue("phone");
                return (
                    <div className="w-max flex items-center justify-center text-center justify-self-center">

                        <p className="text-sm line-clamp-1">{phone}</p>
                    </div>
                )
            },
        },
        {
            accessorKey: "isActive",
            header: () => <div className="text-center">{t(tableHeader.STATUS)}</div>,

            cell: ({ row }) => {
                const isActive: boolean = row.getValue("isActive");
                return (
                    <p className="text-sm line-clamp-3">{isActive ? "Active" : "Inactive"}</p>

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
                            <DropdownMenuItem onClick={handleAssign ? () => handleAssign(rowVal) : undefined} className="text-indigo-800 hover:bg-indigo-800 hover:bg-opacity-25">
                                {t("Assign Branch")}
                            </DropdownMenuItem>
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
        // {
        //     accessorKey: "name",
        //     header: () => <div className="text-center">{t(tableHeader.NAME)}</div>,
        //     cell: ({ row }) => {
        //         const rowItem = row.original
        //         return (
        //             <div className="flex gap-3 items-center justify-center w-max">
        //                 <div className="rounded-full h-11 w-11 relative">
        //                     <Image
        //                         src={rowItem.profilePicture}
        //                         alt="pfp"
        //                         fill
        //                         className="rounded-full"
        //                     />
        //                 </div>
        //                 <div className="flex flex-col text-sm font-medium leading-snug">
        //                     <p className="text-gray-900">{rowItem.name}</p>
        //                     <p className="text-indigo-800">{rowItem.status}</p>
        //                 </div>
        //             </div>
        //         )
        //     },
        // },
        // {
        //     accessorKey: "jobDesc",
        //     header: () => <div className="text-center">{t(tableHeader.JOB_DESC)}</div>,

        //     cell: ({ row }) => {
        //         const job: string = row.getValue("jobDesc");
        //         return (
        //             <Badge text={job} />
        //         )
        //     },
        // },
        // {
        //     accessorKey: "bookedToday",
        //     header: () => <div className="text-center">{t(tableHeader.BOOKED_TODAY)}</div>,

        //     cell: ({ row }) => {
        //         const booking: string[] = row.getValue("bookedToday");
        //         return (
        //             <div className="grid grid-rows-2 grid-cols-4 gap-3 items-center">
        //                 {booking.map((book, i) => (
        //                     <div className={cn("p-2  rounded justify-center items-center text-white text-xs font-medium leading-tight text-center", i === (Math.floor(Math.random() * 8)) ? "bg-amber-400" : "bg-indigo-800")} key={i}>{book}</div>
        //                 ))}
        //             </div>
        //         )
        //     },
        // },
        // {
        //     accessorKey: "workingHours",
        //     header: () => <div className="text-center">{t(tableHeader.WORKING_HOURS)}</div>,

        //     cell: ({ row }) => {
        //         const hours: string = row.getValue("workingHours")
        //         return (
        //             <TextColumn text={hours} />
        //         )
        //     }
        // },
        // {
        //     accessorKey: "rating",
        //     header: () => <div className="text-center">{t(tableHeader.RATING)}</div>,

        //     cell: ({ row }) => {
        //         const rating: string = row.getValue("rating");
        //         return (
        //             <Badge containerStyle="bg-emerald-500" textStyle="text-emerald-500" text={rating} />
        //         )
        //     },
        // },
        // {
        //     id: "transfer",
        //     cell: () => {
        //         // const row = row.original()

        //         return (
        //             <div className="w-full flex items-center justify-center">
        //                 <Button variant="default" className="bg-indigo-800 hover:bg-indigo-500">
        //                     <p className="text-xs">Transfer</p>
        //                 </Button>
        //             </div>

        //         )
        //     },
        // },


    ]
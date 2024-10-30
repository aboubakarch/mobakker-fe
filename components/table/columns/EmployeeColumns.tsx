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
import { Edit, MoreVertical, Trash2, UserCog2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { TFunction } from "i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
import { RoleType } from "@/constants/enums";


export const employeeColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleEmployeeProvider) => void, handleDelete?: (val: SampleEmployeeProvider) => void, handleAssign?: (val: SampleEmployeeProvider) => void) => ColumnDef<SampleEmployeeProvider>[] =
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
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.NAME)}</div>,

            cell: ({ row }) => {
                const firstName: string = row.getValue("firstName");
                const lastName: string = row.original.lastName;
                const rowItem: any = row.original
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
                            <p className="text-gray-900 dark:text-white">{`${firstName} ${lastName}`}</p>
                        </div>
                    </div>
                )
            },
        },

        {
            accessorKey: "email",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.EMAIL)}</div>,

            cell: ({ row }) => {
                const email: string = row.getValue("email");
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "phone",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.PHONE)}</div>,

            cell: ({ row }) => {
                const phone: string = row.getValue("phone");
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{phone}</p>
                    </div>
                )
            },
        },
        {
            accessorKey: "jobDescription",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.JOB_DESC)}</div>,

            cell: ({ row }) => {
                const email: string = (row.original as any).data.jobDescription || "-";
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "workHourFrom",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.START_DATE)}</div>,

            cell: ({ row }) => {

                const email: string = (row.original as any).data.workHourFrom || "-";
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },

        {
            accessorKey: "workHourTo",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.END_DATE)}</div>,

            cell: ({ row }) => {
                const email: string = (row.original as any).data.workHourTo || "-";
                return (
                    <div className="w-max flex items-center justify-center ltr:text-left rtl:text-right ">

                        <p className="text-sm line-clamp-1">{email}</p>
                    </div>
                )
            },
        },
        {
            accessorKey: "isActive",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.STATUS)}</div>,

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
                const role = getCookie("role")
                console.log(role)
                if (role === RoleType.CUSTOMER_CARE) {
                    return null
                }

                return (
                    <TooltipProvider>
                        <div className="flex gap-2">
                            {role !== RoleType.BRANCH_MANAGER && <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button disabled={!(row.original as any)?.isActive} onClick={handleAssign ? (e: any) => { e.stopPropagation(); handleAssign(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <UserCog2 className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t("Assign Branch")}</p>
                                </TooltipContent>
                            </Tooltip>}
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button disabled={!(row.original as any)?.isActive} onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <Edit className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t(messages.EDIT)}</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button disabled={!(row.original as any)?.isActive} onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
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
        //     header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.NAME)}</div>,
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
        //                     <p className="text-gray-900 dark:text-white">{rowItem.name}</p>
        //                     <p className="text-indigo-800">{rowItem.status}</p>
        //                 </div>
        //             </div>
        //         )
        //     },
        // },
        // {
        //     accessorKey: "jobDesc",
        //     header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.JOB_DESC)}</div>,

        //     cell: ({ row }) => {
        //         const job: string = row.getValue("jobDesc");
        //         return (
        //             <Badge text={job} />
        //         )
        //     },
        // },
        // {
        //     accessorKey: "bookedToday",
        //     header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.BOOKED_TODAY)}</div>,

        //     cell: ({ row }) => {
        //         const booking: string[] = row.getValue("bookedToday");
        //         return (
        //             <div className="grid grid-rows-2 grid-cols-4 gap-3 items-center">
        //                 {booking.map((book, i) => (
        //                     <div className={cn("p-2  rounded justify-center items-center text-white dark:text-white text-xs font-medium leading-tight ltr:text-left rtl:text-right", i === (Math.floor(Math.random() * 8)) ? "bg-amber-400" : "bg-indigo-800")} key={i}>{book}</div>
        //                 ))}
        //             </div>
        //         )
        //     },
        // },
        // {
        //     accessorKey: "workingHours",
        //     header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.WORKING_HOURS)}</div>,

        //     cell: ({ row }) => {
        //         const hours: string = row.getValue("workingHours")
        //         return (
        //             <TextColumn text={hours} />
        //         )
        //     }
        // },
        // {
        //     accessorKey: "rating",
        //     header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.RATING)}</div>,

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
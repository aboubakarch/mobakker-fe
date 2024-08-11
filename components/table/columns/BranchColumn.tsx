import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { Edit, HandPlatter, MoreVertical, Trash2 } from "lucide-react";
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";
import Image from "next/image";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { RoleType } from "@/constants/enums";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { cn } from "@/lib/utils";

enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}


const statusOptions = [
    { name: "Pending", value: "PENDING" },
    { name: "Approved", value: "APPROVED" },
    { name: "Rejected", value: "REJECTED" }
];

export const branchColumns: (
    t: TFunction<"translation", undefined>,
    handleEdit?: (val: SampleBranch) => void,
    handleDelete?: (val: SampleBranch) => void,
    handleAssign?: (val: SampleBranch) => void,
    onStatusChange?: (val: SampleBranch, status: string) => void
) => ColumnDef<SampleBranch>[]
    = (t, handleEdit, handleDelete, handleAssign, onStatusChange) => [
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
            accessorKey: "name",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.BRANCH_NAME)}</div>,

            cell: ({ row }) => {
                const rowItem = row.original
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
                            <p className="text-gray-900">{rowItem.name}</p>
                        </div>
                    </div>
                )
            },
        },

        {
            accessorKey: "address",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.LOCATION)}</div>,

            cell: ({ row }) => {
                const location: string = row.getValue("address");
                return (
                    <TextColumn text={location} />
                )
            },
        },

        {
            accessorKey: "city",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.CITY)}</div>,

            cell: ({ row }) => {
                const city: string = row.getValue("city");
                return (
                    <TextColumn text={city} />
                )
            },
        },
        {
            accessorKey: "country",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.COUNTRY)}</div>,

            cell: ({ row }) => {
                const country: string = row.getValue("country");
                return (
                    <TextColumn text={country} />
                )
            },
        },
        {
            accessorKey: "isActive",
            header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.STATUS)}</div>,

            cell: ({ row }) => {
                const isActive: boolean = row.getValue("isActive");
                const role = getCookie("role")
                const original = row.original
                if (role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) {
                    return (

                        <Select onValueChange={(val) => { if (onStatusChange) { onStatusChange(original, val) } }} value={isActive ? Status.APPROVED : Status.REJECTED} >
                            {/* <SelectTrigger className={cn("flex gap-2 text-white", isActive === "REJECTED" ? "bg-red-500" : status === "PENDING" ? "bg-yellow-500" : status === "APPROVED" ? "bg-green-600" : "")}> */}
                            <SelectTrigger className={cn("flex gap-2 text-white", !isActive ? "bg-red-500" : "bg-green-600")}>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {statusOptions.map(item => (
                                    <SelectItem key={item.value} value={`${item.value}`}>{item.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )
                }
                return (
                    <TextColumn text={isActive ? "Active" : "Inactive"} />
                )
            },
        },


        {
            id: "actions",
            cell: ({ row }) => {
                const rowVal = row.original

                return (
                    <TooltipProvider>
                        <div className="flex gap-2">

                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button onClick={handleAssign ? (e: any) => { e.stopPropagation(); handleAssign(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <HandPlatter className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t(messages.ASSIGN_SERVICES)}</p>
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

    ]
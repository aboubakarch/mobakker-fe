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
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";


export const serviceColumns: (t: TFunction<"translation", undefined>) => ColumnDef<SampleServices>[] = (t: TFunction<"translation", undefined>) => [
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
        header: () => <div className="text-center">{t(tableHeader.SERVICE_NAME)}</div>,
        cell: ({ row }) => {
            const rowItem = row.original
            return (
                <div className="flex gap-3 items-center justify-center w-max">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={rowItem.servicePicture}
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
        accessorKey: "details",
        header: () => <div className="text-center">{t(tableHeader.DETAILS)}</div>,

        cell: ({ row }) => {
            const details: string = row.getValue("details");
            return (
                <p className="text-sm line-clamp-2 w-44">{details}</p>
            )
        },
    },
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
        accessorKey: "employeeCount",
        header: () => <div className="text-center">{t(tableHeader.EMPLOYEE_NUM)}</div>,

        cell: ({ row }) => {
            const employeeCount: number = row.getValue("employeeCount")
            return (
                <TextColumn text={employeeCount} />
            )
        }
    },
    {
        accessorKey: "timeSlot",
        header: () => <div className="text-center">{t(tableHeader.TIME_SLOT)}</div>,

        cell: ({ row }) => {
            const timeSlot: string = row.getValue("timeSlot");
            return (
                <Badge containerStyle="bg-emerald-500" textStyle="text-emerald-500" text={timeSlot} />
            )
        },
    },
    {
        accessorKey: "workingHours",
        header: () => <div className="text-center">{t(tableHeader.WORKING_HOURS)}</div>,

        cell: ({ row }) => {
            const workingHours: string = row.getValue("workingHours");
            return (
                <TextColumn text={workingHours} />
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
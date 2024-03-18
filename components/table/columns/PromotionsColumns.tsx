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
import { Switch } from "@/components/ui/Switch";
// import { Checkbox } from "@/components/ui/Checkbox";


export const promotionsColumns: ColumnDef<SamplePromotions>[] = [

    {
        accessorKey: "promotionName",
        header: () => <div className="text-center">{tableHeader.PROMOTION_NAME}</div>,

        cell: ({ row }) => {
            const promotionName: string = row.getValue("promotionName");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{promotionName}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "startDate",
        header: () => <div className="text-center">{tableHeader.START_DATE}</div>,

        cell: ({ row }) => {
            const startDate: string = row.getValue("startDate");
            return (
                <div className="w-max flex items-center justify-center text-center">
                    <p className="text-sm line-clamp-1 ">{startDate}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "endDate",
        header: () => <div className="text-center">{tableHeader.END_DATE}</div>,

        cell: ({ row }) => {
            const endDate: string = row.getValue("endDate");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">
                    <p className="text-sm line-clamp-1">{endDate}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "serviceName",
        header: () => <div className="text-center">{tableHeader.SERVICE_NAME}</div>,
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
                        <p className="text-gray-900">{rowItem.serviceName}</p>
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
        accessorKey: "capacity",
        header: () => <div className="text-center">{tableHeader.CAPACITY}</div>,

        cell: ({ row }) => {
            const capacity: string = row.getValue("capacity");
            return (
                <Badge text={capacity} />
            )
        },
    },
    {
        accessorKey: "availableCount",
        header: () => <div className="text-center">{tableHeader.AVAILABLE}</div>,

        cell: ({ row }) => {
            const availableCount: string = row.getValue("availableCount");
            return (
                <TextColumn text={availableCount} />
            )
        },
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">{tableHeader.STATUS}</div>,

        cell: ({ row }) => {
            const status: boolean = row.getValue("status");
            return (
                <Switch className='data-[state=checked]:bg-indigo-800 data-[state=unchecked]:bg-red-400 ' checked={status} />
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
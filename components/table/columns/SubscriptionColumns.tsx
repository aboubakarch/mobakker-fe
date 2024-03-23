import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { MoreVertical, Pause, RefreshCw } from "lucide-react";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { Switch } from "@/components/ui/Switch";
import { TFunction } from "i18next";
// import { Checkbox } from "@/components/ui/Checkbox";


export const subscriptionColumns: (t: TFunction<"translation", undefined>) => ColumnDef<SampleSubscription>[] = (t: TFunction<"translation", undefined>) => [

    {
        accessorKey: "subscriptionId",
        header: () => <div className="text-center">{t(tableHeader.SUBSCRIPTION)}</div>,

        cell: ({ row }) => {
            const subscriptionId: string = row.getValue("subscriptionId");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{subscriptionId}</p>
                </div>
            )
        },
    },
    {
        accessorKey: "customerName",
        header: () => <div className="text-center">{t(tableHeader.CUSTOMER_NAME)}</div>,

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
        accessorKey: "type",
        header: () => <div className="text-center">{t(tableHeader.TYPE)}</div>,

        cell: ({ row }) => {
            const type: string = row.getValue("type");
            return (
                <Badge text={type} />
            )
        },
    },
    {
        accessorKey: "paid",
        header: () => <div className="text-center">{t(tableHeader.PAID)}</div>,

        cell: ({ row }) => {
            const paid: string = row.getValue("paid")
            return (
                <TextColumn text={paid} />
            )
        }
    },
    {
        accessorKey: "status",
        header: () => <div className="text-center">{t(tableHeader.STATUS)}</div>,

        cell: ({ row }) => {
            const status: string = row.getValue("status") ? "Active" : "Inactive";
            return (
                <Badge text={status} />
            )
        },
    },
    {
        accessorKey: "renewal",
        header: () => <div className="text-center">{t(tableHeader.RENEWAL)}</div>,

        cell: ({ row }) => {
            const renewal: string = row.getValue("renewal")
            return (
                <TextColumn text={renewal} />
            )
        }
    },
    {
        accessorKey: "dayLeft",
        header: () => <div className="text-center">{t(tableHeader.DAY_LEFT)}</div>,

        cell: ({ row }) => {
            const dayLeft: string = row.getValue("dayLeft")
            return (
                <TextColumn text={dayLeft} />
            )
        }
    },

    {
        id: "subcriptionAction",

        cell: ({ row }) => {
            const status: boolean = row.getValue("status");
            return (
                <div className="flex w-full items-center justify-center gap-2">
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <Pause className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Switch className='data-[state=checked]:bg-indigo-800 data-[state=unchecked]:bg-red-400 ' checked={status} />

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
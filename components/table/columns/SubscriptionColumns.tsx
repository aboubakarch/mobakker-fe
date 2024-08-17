import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { MailPlus, MoreVertical, Pause, RefreshCw } from "lucide-react";
// import { Checkbox } from "@/components/ui/Checkbox"
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { Switch } from "@/components/ui/Switch";
import { TFunction } from "i18next";
import Image from "next/image";
import { isValidImageSrc } from "@/lib/helpers";
import moment from "moment";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
// import { Checkbox } from "@/components/ui/Checkbox";


const statusOpts = [
    { name: "Initialized", value: "INITIALIZED" },
    { name: "Active", value: "ACTIVE" },
    { name: "Paused", value: "PAUSED" },
    { name: "Failed", value: "FAILED" },
    { name: "Stopped", value: "STOPPED" }
]
export const subscriptionColumns: (t: TFunction<"translation", undefined>, onStatusChange?: (val: SampleSubscription, status: string) => void, onSendNotification?: ((val: SampleSubscription) => void)
) => ColumnDef<SampleSubscription>[] =
    (t, onStatusChange, onSendNotification) => [

        // {
        //     accessorKey: "subscriptionId",
        //     header: () => <div className="text-center">{t(tableHeader.SUBSCRIPTION)}</div>,

        //     cell: ({ row }) => {
        //         const subscriptionId: string = row.getValue("subscriptionId");
        //         return (
        //             <div className="w-max flex items-center justify-center text-center justify-self-center">

        //                 <p className="text-sm line-clamp-1">{subscriptionId}</p>
        //             </div>
        //         )
        //     },
        // },
        {
            accessorKey: "serviceProvider",
            header: () => <div className="text-center">{t(tableHeader.CUSTOMER_NAME)}</div>,

            cell: ({ row }) => {
                const provider: ServiceProvider = row.getValue("serviceProvider");
                return (
                    <div className="flex gap-3 items-center justify-center w-max">
                        <div className="rounded-full h-11 w-11 relative">
                            <Image
                                src={provider.user.avatar && isValidImageSrc(provider.user.avatar) ? provider.user.avatar : '/assets/sampleImage.jpg'}
                                alt="pfp"
                                fill
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col text-sm font-medium leading-snug">
                            <p className="text-gray-900">{provider?.user ? `${provider?.user?.firstName || ""} ${provider?.user?.lastName || ""}` : provider.id}</p>
                        </div>
                    </div>
                )
            },
        },
        {
            accessorKey: "branch",
            header: () => <div className="text-left">{t(tableHeader.BRANCH_NAME)}</div>,

            cell: ({ row }) => {
                const rowItem: SampleBranch = row.getValue("branch");
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
                            <p className="text-indigo-800">{rowItem.city}</p>
                        </div>
                    </div>
                )
            },
        },
        {
            accessorKey: "subscription",
            header: () => <div className="text-center">{t(tableHeader.TYPE)}</div>,

            cell: ({ row }) => {
                const sub: Subscription = row.getValue("subscription");
                return (
                    <Badge text={sub.duration} />
                )
            },
        },
        {
            accessorKey: "subscriptionDate",
            header: () => <div className="text-center">{t("Date")}</div>,

            cell: ({ row }) => {
                const sub: string = row.getValue("subscriptionDate");
                return (
                    <TextColumn text={moment(sub).format("DD-MMM-YYYY") || "--"} />
                )
            },
        },
        {
            accessorKey: "expiryDate",
            header: () => <div className="text-center">{t("Expiry Date")}</div>,

            cell: ({ row }) => {
                const paid: string = row.getValue("expiryDate")
                return (
                    <TextColumn text={moment(paid).format("DD-MMM-YYYY") || "--"} />
                )
            }
        },
        {
            accessorKey: "subcription_status",
            header: () => <div className="text-center">{"Type " + t(tableHeader.STATUS)}</div>,

            cell: ({ row }) => {
                const subs: Subscription = row.original.subscription;
                return (
                    <Badge containerStyle={!subs.isActive ? "bg-red-500 bg-opacty-100" : undefined} textStyle={!subs.isActive ? "text-white" : undefined} text={subs.isActive ? "Active" : "Inactive"} />
                )
            },
        },
        // {
        //     accessorKey: "renewal",
        //     header: () => <div className="text-center">{t(tableHeader.RENEWAL)}</div>,

        //     cell: ({ row }) => {
        //         const renewal: string = row.getValue("renewal")
        //         return (
        //             <TextColumn text={renewal} />
        //         )
        //     }
        // },
        // {
        //     accessorKey: "dayLeft",
        //     header: () => <div className="text-center">{t(tableHeader.DAY_LEFT)}</div>,

        //     cell: ({ row }) => {
        //         const dayLeft: string = row.getValue("dayLeft")
        //         return (
        //             <TextColumn text={dayLeft} />
        //         )
        //     }
        // },

        // {
        //     id: "subcriptionAction",

        //     cell: ({ row }) => {
        //         const status: boolean = row.getValue("status");
        //         return (
        //             <div className="flex w-full items-center justify-center gap-2">
        //                 <Button variant="ghost" className="h-8 w-8 p-0">
        //                     <Pause className="h-4 w-4" />
        //                 </Button>
        //                 <Button variant="ghost" className="h-8 w-8 p-0">
        //                     <RefreshCw className="h-4 w-4" />
        //                 </Button>
        //                 <Switch className='data-[state=checked]:bg-indigo-800 data-[state=unchecked]:bg-red-400 ' checked={status} />

        //             </div>
        //         )
        //     },
        // },
        {
            accessorKey: "status",
            header: () => <div className="text-left">{t(tableHeader.STATUS)}</div>,

            cell: ({ row }) => {
                const status: any = row.getValue("status");
                const original: any = row.original;
                // { name: "Initialized", value: "INITIALIZED" },
                // { name: "Active", value: "ACTIVE" },
                // { name: "Paused", value: "PAUSED" },
                // { name: "Failed", value: "FAILED" },
                // { name: "Stopped", value: "STOPPED" }
                return (
                    // <Button className='bg-red-500 hover:bg-red-400' onClick={(e) => { e.stopPropagation(); if (onAppointmentChange) { onAppointmentChange(val) } }} >
                    //     Cancel
                    // </Button>
                    <Select onValueChange={(val) => { if (onStatusChange) { onStatusChange(original, val) } }} value={status} defaultValue={status}>
                        <SelectTrigger className={cn("flex gap-2 text-white", status === "FAILED" ? "bg-red-500" : status === "PAUSED" ? "bg-yellow-500" : status === "INITIALIZED" ? "bg-indigo-800" : status === "STOPPED" ? "bg-red-500" : status === "ACTIVE" ? "bg-green-600" : "")}>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {statusOpts.map(item => (
                                <SelectItem key={item.value} value={`${item.value}`}>{item.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
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
                                    <Button onClick={onSendNotification ? (e: any) => { e.stopPropagation(); onSendNotification(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                        <MailPlus className="h-5 w-5 text-indigo-800" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t("Send Notification")}</p>
                                </TooltipContent>
                            </Tooltip>

                            {/* <Tooltip>
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
                            </Tooltip> */}
                        </div>
                    </TooltipProvider>
                )
            },
        },

    ]
import { ColumnDef } from "@tanstack/react-table";
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui";
import { Edit, MoreVertical, Trash2 } from "lucide-react";
import { messages, tableHeader } from "@/constants/constants";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { TFunction } from "i18next";
import Image from "next/image";
import { getCookie, isValidImageSrc } from "@/lib/helpers";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { RoleType } from "@/constants/enums";


export const customerRatingColumns: (
    t: TFunction<"translation", undefined>,
    handleEdit?: (val: SampleCustomerRating) => void,
    handleDelete?: (val: SampleCustomerRating) => void,
) => ColumnDef<SampleCustomerRating>[] = (t, handleEdit, handleDelete) => ([
    {
        accessorKey: "customer",
        header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.CUSTOMER_NAME)}</div>,
        cell: ({ row }) => {
            const customer: Customer = row.getValue("customer");
            return (
                <div className="flex gap-3 items-center justify-center w-max">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={customer.user.avatar && isValidImageSrc(customer.user.avatar) ? customer.user.avatar : '/assets/sampleImage.jpg'}
                            alt="customer avatar"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-snug">
                        <p className="text-gray-900 dark:text-white">{`${customer.user.firstName || ""} ${customer.user.lastName || ""}`}</p>
                        <p className="text-indigo-800">{customer.user.email}</p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "user",
        header: () => <div className="ltr:text-left rtl:text-right">{t(messages.REVIEWER)}</div>,
        cell: ({ row }) => {
            const user: User = row.getValue("user");
            return (
                <div className="flex gap-3 items-center justify-center w-max">
                    <div className="rounded-full h-11 w-11 relative">
                        <Image
                            src={user.avatar && isValidImageSrc(user.avatar) ? user.avatar : '/assets/sampleImage.jpg'}
                            alt="employee avatar"
                            fill
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-sm font-medium leading-snug">
                        <p className="text-gray-900 dark:text-white">{`${user.firstName || ""} ${user.lastName || ""}`}</p>
                        <p className="text-indigo-800">{user.email}</p>
                    </div>
                </div>
            );
        },
    },
    {
        accessorKey: "rating",
        header: () => <div className="ltr:text-left rtl:text-right">{t(tableHeader.RATING)}</div>,
        cell: ({ row }) => {
            const rating: number = row.getValue("rating");
            return <Badge text={`${rating}`} />;
        },
    },
    {
        accessorKey: "avgRating",
        header: () => <div className="ltr:text-left rtl:text-right">{t(messages.AVERAGE_RATING)}</div>,
        cell: ({ row }) => {
            const rating: number = row.getValue("avgRating");
            return (
                <Badge text={`${rating.toFixed(2)}`} />
            )
        },
    },
    {
        accessorKey: "review",
        header: () => <div className="ltr:text-left rtl:text-right">{t(messages.REVIEW)}</div>,
        cell: ({ row }) => {
            const review: string = row.getValue("review");
            return <TextColumn text={review} />;
        },
    },
    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //         const rowVal = row.original;
    //         const role = getCookie("role");

    //         if (role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) {
    //             return null;
    //         }

    //         return (
    //             <TooltipProvider>
    //                 <div className="flex gap-2">
    //                     <Tooltip>
    //                         <TooltipTrigger asChild>
    //                             <Button onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
    //                                 <Edit className="h-5 w-5 text-indigo-800" />
    //                             </Button>
    //                         </TooltipTrigger>
    //                         <TooltipContent>
    //                             <p>{t(messages.EDIT)}</p>
    //                         </TooltipContent>
    //                     </Tooltip>
    //                     <Tooltip>
    //                         <TooltipTrigger asChild>
    //                             <Button onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal) } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
    //                                 <Trash2 className="h-5 w-5 text-red-700" />
    //                             </Button>
    //                         </TooltipTrigger>
    //                         <TooltipContent>
    //                             <p>{t(messages.DELETE)}</p>
    //                         </TooltipContent>
    //                     </Tooltip>
    //                 </div>
    //             </TooltipProvider>
    //         );
    //     },
    // },
]);
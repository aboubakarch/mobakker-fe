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
import { Checkbox } from "@/components/ui/Checkbox";
import TextColumn from "../TextColumn";
import Badge from "@/components/ui/Badge";
import { TFunction } from "i18next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { getCookie } from "@/lib/helpers";
import { RoleType } from "@/constants/enums";
import { formConstants, messages, tableHeader } from "@/constants/constants";

export const stateColumns: (
    t: TFunction<"translation", undefined>,
    handleEdit?: (val: State) => void,
    handleDelete?: (val: State) => void
) => ColumnDef<State>[] = (t, handleEdit, handleDelete) => [
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
        header: () => <div>{t(formConstants.STATE_NAME_LABEL)}</div>,
        cell: ({ row }) => {
            const rowItem = row.original;
            return (
                <TextColumn text={rowItem.name} />
            );
        },
    },
    // {
    //     accessorKey: "countryName",
    //     header: () => <div>{t(formConstants.COUNTRY_NAME_LABEL)}</div>,
    //     cell: ({ row }) => {
    //         const countryName: string = row.getValue("countryName");
    //         return (
    //             <TextColumn text={countryName} />
    //         );
    //     },
    // },
    {
        accessorKey: "code",
        header: () => <div>{t(formConstants.STATE_CODE_LABEL)}</div>,
        cell: ({ row }) => {
            const code: string = row.getValue("code");
            return (
                <TextColumn text={code} />
            );
        },
    },
    {
        accessorKey: "isActive",
        header: () => <div>{t(tableHeader.STATUS)}</div>,
        cell: ({ row }) => {
            const isActive: boolean = row.getValue("isActive");
            return (
                <Badge containerStyle={isActive ? "bg-green-600 bg-opacity-100" : "bg-red-500 bg-opacity-100"} textStyle="text-white" text={isActive ? "Active" : "Inactive"} />
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const rowVal = row.original;
            const role = getCookie("role");

            if (role === RoleType.CUSTOMER_CARE) {
                return null;
            }

            return (
                <TooltipProvider>
                    <div className="flex gap-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={handleEdit ? (e: any) => { e.stopPropagation(); handleEdit(rowVal); } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                    <Edit className="h-5 w-5 text-indigo-800" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t(messages.EDIT)}</p>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button onClick={handleDelete ? (e: any) => { e.stopPropagation(); handleDelete(rowVal); } : undefined} variant="ghost" className="h-10 w-10 p-0 hover:bg-indigo-800 hover:bg-opacity-5">
                                    <Trash2 className="h-5 w-5 text-red-700" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{t(messages.DELETE)}</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
            );
        },
    },
];

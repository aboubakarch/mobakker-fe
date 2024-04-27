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
import { messages, tableHeader } from "@/constants/constants";
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";


export const branchManagerColumns: (t: TFunction<"translation", undefined>, handleEdit?: (val: SampleProvider) => void, handleDelete?: (val: SampleProvider) => void) => ColumnDef<SampleProvider>[] =
    (t, handleEdit, handleDelete) => [
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
            accessorKey: "password",
            header: () => <div className="text-center">{t(tableHeader.PASSWORD)}</div>,

            cell: ({ }) => {
                // const password: string = row.getValue("password")
                return (
                    <div className="w-max flex items-center justify-center">
                        <div className="bg-indigo-800 bg-opacity-5 rounded justify-center items-start gap-2.5 inline-flex py-1 px-2">
                            <div className="text-indigo-800 text-xs font-medium  leading-tight">***************</div>
                        </div>
                    </div>
                )
            }
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
            accessorKey: "description",
            header: () => <div className="text-center">{t(tableHeader.DETAILS)}</div>,

            cell: ({ row }) => {
                const description: string = row.getValue("description");
                return (
                    <p className="text-sm line-clamp-3">{description}</p>

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


    ]
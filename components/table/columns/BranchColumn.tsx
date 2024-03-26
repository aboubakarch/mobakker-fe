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
import TextColumn from "../TextColumn";
import { Checkbox } from "@/components/ui/Checkbox";
import { TFunction } from "i18next";


export const branchColumns: (t: TFunction<"translation", undefined>) => ColumnDef<SampleBranch>[] = (t: TFunction<"translation", undefined>) => [
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
        header: () => <div className="text-center">{t(tableHeader.BRANCH_NAME)}</div>,

        cell: ({ row }) => {
            const name: string = row.getValue("name");
            return (
                <div className="w-max flex items-center justify-center text-center justify-self-center">

                    <p className="text-sm line-clamp-1">{name}</p>
                </div>
            )
        },
    },

    {
        accessorKey: "location",
        header: () => <div className="text-center">{t(tableHeader.LOCATION)}</div>,

        cell: ({ row }) => {
            const location: string = row.getValue("location");
            return (
                <TextColumn text={location} />
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
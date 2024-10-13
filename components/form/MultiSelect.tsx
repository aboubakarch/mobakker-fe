"use client"

import * as React from "react"
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/Button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui"
import _ from "lodash"
import Image from "next/image"
import { SearchInput } from "../ui/SearchInput"
import { ChevronsUpDown } from "lucide-react"

// type Checked = DropdownMenuCheckboxItemProps["checked"]

const people = [
    { value: 1, name: 'Durward Reynolds', image: "/assets/sampleImage.jpg" },
    { value: 2, name: 'Kenton Towne', image: "/assets/sampleImage.jpg" },
    { value: 3, name: 'Therese Wunsch', image: "/assets/sampleImage.jpg" },
    { value: 4, name: 'Benedict Kessler', image: "/assets/sampleImage.jpg" },
    { value: 5, name: 'Katelyn Rohan', image: "/assets/sampleImage.jpg" },
]


export const EmployeeMultiSelect: React.FC<{
    selected: any[], setSelected: (arg: any) => void, label?: string, data?: {
        value: number;
        name: string;
        image?: string;
    }[]
}> = ({ selected, setSelected, label, data }) => {
    console.log(selected, setSelected, data)
    const [search, setSearch] = React.useState("")
    console.log("DATA", data)
    const selectedData = data ? data : people
    const filteredPeople = React.useMemo(() => selectedData.filter(per => per.name.toLowerCase().includes(search.toLowerCase())), [search])
    // function addOrRemoveValue<T>(array: T[], value: T): T[] {
    //     _.pull(array, value); // Remove the value if it exists
    //     array = _.union(array, [value]); // Add the value to the array
    //     return array;
    // }


    const handleCheck = (value: string | number, checked: boolean) => {
        let newArray: (number | string)[] = []
        if (checked) {
            newArray = [...selected, value]
        } else {
            newArray = _.without(selected, value)
        }
        setSelected(newArray)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className=" justify-between w-full"
                >

                    <p>{selected.length === 0 ? `Select ${label || "Items"}` : `${selected.length} ${label || "Items"} Selected`}</p>
                    <ChevronsUpDown className="ltr:ml-2 rtl:mr-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="full max-h-96 overflow-auto scrollbar">
                <DropdownMenuLabel>{label || "Items"}</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <SearchInput
                    value={search}
                    onChange={(e: any) => setSearch(e.target.value)}
                    placeholder="Search"
                    className='bg-screen focus-visible:ring-0 border-0 w-80'
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.stopPropagation()} />

                <DropdownMenuSeparator />

                {filteredPeople.length === 0 ? (
                    <div className="h-10 w-full text-center flex items-center justify-center text-sm">
                        No Emplyees found
                    </div>
                ) : null}

                {filteredPeople.map(per => (

                    <DropdownMenuCheckboxItem
                        key={per.value}
                        checked={_.includes(selected, per.value)}
                        onCheckedChange={(checked: boolean) => handleCheck(per.value, checked)}
                    >
                        <div className="flex gap-3 items-center justify-center">
                            {per.image && <div className="rounded-full h-8 w-8 relative">
                                <Image
                                    src={per.image}
                                    alt="pfp"
                                    fill
                                    className="rounded-full"
                                />
                            </div>}
                            <div className="flex flex-col text-sm font-medium leading-snug">
                                <p className="text-gray-900 dark:text-white">{per.name}</p>
                            </div>
                        </div>
                    </DropdownMenuCheckboxItem>
                ))}


            </DropdownMenuContent>
        </DropdownMenu>
    )
}

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

// type Checked = DropdownMenuCheckboxItemProps["checked"]

const people = [
    { id: 1, name: 'Durward Reynolds', image: "/assets/sampleImage.jpg" },
    { id: 2, name: 'Kenton Towne', image: "/assets/sampleImage.jpg" },
    { id: 3, name: 'Therese Wunsch', image: "/assets/sampleImage.jpg" },
    { id: 4, name: 'Benedict Kessler', image: "/assets/sampleImage.jpg" },
    { id: 5, name: 'Katelyn Rohan', image: "/assets/sampleImage.jpg" },
]


export const EmployeeMultiSelect: React.FC<{ selected: any[], setSelected: (arg: any) => void }> = ({ selected, setSelected }) => {

    // function addOrRemoveValue<T>(array: T[], value: T): T[] {
    //     _.pull(array, value); // Remove the value if it exists
    //     array = _.union(array, [value]); // Add the value to the array
    //     return array;
    // }

    const handleCheck = (id: string | number, checked: boolean) => {
        let newArray: (number | string)[] = []
        if (checked) {
            newArray = [...selected, id]
        } else {
            newArray = _.without(selected, id)
        }
        setSelected(newArray)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Employees</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <SearchInput />
                <DropdownMenuSeparator />

                {people.map(per => (

                    <DropdownMenuCheckboxItem
                        key={per.id}
                        checked={_.includes(selected, per.id)}
                        onCheckedChange={(checked: boolean) => handleCheck(per.id, checked)}
                    >
                        <div className="flex gap-3 items-center justify-center w-max">
                            <div className="rounded-full h-8 w-8 relative">
                                <Image
                                    src={per.image}
                                    alt="pfp"
                                    fill
                                    className="rounded-full"
                                />
                            </div>
                            <div className="flex flex-col text-sm font-medium leading-snug">
                                <p className="text-gray-900">{per.name}</p>
                            </div>
                        </div>
                    </DropdownMenuCheckboxItem>
                ))}


            </DropdownMenuContent>
        </DropdownMenu>
    )
}

import { Button } from '@/components/ui'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/Sheet'
import { Filter } from 'lucide-react'
import React, { FC } from 'react'

const BaseFilter: FC<{ onApply?: () => void, onReset?: () => void, children?: React.ReactNode }> = (
    { onApply, onReset, children }
) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-indigo-800 bg-opacity-5 hover:bg-indigo-100">
                    <Filter className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                    <p>Filter</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                        You can choose to apply any filter below.
                    </SheetDescription>
                </SheetHeader>

                {children}

                <SheetFooter>
                    <SheetClose asChild>
                        <Button onClick={onReset ? onReset : undefined} type="button" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-white dark:text-white  hover:bg-indigo-600">Reset Filter</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button onClick={onApply ? onApply : undefined} type="button" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-white dark:text-white  hover:bg-indigo-600">Apply Filter</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default BaseFilter
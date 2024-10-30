"use client"
import { Button } from '@/components/ui'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/Sheet'
import { messages } from '@/constants/constants'
import { Filter } from 'lucide-react'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const BaseFilter: FC<{ onApply?: () => void, onReset?: () => void, children?: React.ReactNode }> = (
    { onApply, onReset, children }
) => {
    const { t } = useTranslation();
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-indigo-800 bg-opacity-5 hover:bg-indigo-100">
                    <Filter className="ltr:mr-2 rtl:ml-2 h-4 w-4" />
                    <p>{t(messages.FILTER)}</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{t(messages.FILTER)}</SheetTitle>
                    <SheetDescription>
                        {t(messages.FILTER_DESCRIPTION)}
                    </SheetDescription>
                </SheetHeader>

                {children}

                <SheetFooter>
                    <SheetClose asChild>
                        <Button onClick={onReset ? onReset : undefined} type="button" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-white dark:text-white  hover:bg-indigo-600">{t(messages.RESET_FILTER)}</Button>
                    </SheetClose>
                    <SheetClose asChild>
                        <Button onClick={onApply ? onApply : undefined} type="button" className="ltr:ml-auto rtl:mr-auto bg-indigo-800 text-white dark:text-white  hover:bg-indigo-600">{t(messages.APPLY_FILTER)}</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default BaseFilter
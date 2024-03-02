import { cn } from '@/lib/utils'
import React, { FC } from 'react'

const Badge: FC<IBadgeProps> = ({
    containerStyle = "bg-indigo-800",
    text,
    textStyle = "text-indigo-800",
}) => {
    return (
        <div className=" flex items-center justify-center">
            <div className={cn("h-7 px-3 py-[3px]  select-none bg-opacity-10 rounded-[30px] justify-center items-center gap-px inline-flex", containerStyle)}>
                <div className={cn("text-indigo-800 w-full text-xs font-medium leading-tight", textStyle)}>{text}</div>
            </div>
        </div>
    )
}

export default Badge
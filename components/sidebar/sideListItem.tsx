import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'

const SideListItem: FC<ISideBarItem> = (props) => {
    const path = usePathname()

    return (
        <Link href={props.link} className={cn('flex gap-2 py-2 pl-4 items-center rounded-md hover:bg-indigo-800 hover:bg-opacity-25', path === props.link ? "bg-indigo-800 bg-opacity-20" : "")}>

            <div>
                <props.icon className={cn('h-6 w-6', path === props.link ? "text-indigo-800" : "")} />
            </div>
            <div className={cn('text-sm text-icon', path === props.link ? "text-indigo-800" : "")}>
                {props.name}
            </div>
        </Link>
    )
}

export default SideListItem
import { ISideBarItem } from '@/@types/sidebar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const SideListItem: FC<ISideBarItem> = (props) => {
    const path = usePathname()
    const { t } = useTranslation()
    const isSelected = path === props.link || path === `/ar${props.link}` || path === `${props.link}/`

    return (
        <Link href={props.link} className={cn('flex gap-2 py-2 pl-4 items-center rounded-md hover:bg-indigo-800 hover:bg-opacity-25',
            isSelected ? "bg-indigo-800 bg-opacity-15 border-r-2 border-indigo-800" : "")}>

            <div>
                <props.icon className={cn('h-6 w-6', (isSelected) ? "text-indigo-800" : "")} />
            </div>
            <div className={cn('text-sm text-icon', isSelected ? "text-indigo-800 font-medium" : "")}>
                {t(props.name)}
            </div>
        </Link>
    )
}

export default SideListItem
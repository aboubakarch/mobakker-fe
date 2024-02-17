import Link from 'next/link'
import React, { FC } from 'react'

const SideListItem: FC<ISideBarItem> = (item) => {
    return (
        <Link href={item.link} className='flex gap-2 hover:bg-screen py-2 pl-4'>

            <div>
                <item.icon className='h-6 w-6' />
            </div>
            <div className='text-base text-icon'>
                {item.name}
            </div>
        </Link>
    )
}

export default SideListItem
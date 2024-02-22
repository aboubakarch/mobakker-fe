import Link from 'next/link'
import React, { FC } from 'react'

const SideListItem: FC<ISideBarItem> = (props) => {
    return (
        <Link href={props.link} className='flex gap-2 hover:bg-screen py-2 pl-4 items-center'>

            <div>
                <props.icon className='h-6 w-6' />
            </div>
            <div className='text-sm text-icon'>
                {props.name}
            </div>
        </Link>
    )
}

export default SideListItem
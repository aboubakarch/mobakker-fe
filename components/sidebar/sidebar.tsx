import { SettingsNavigation, sidebarNavigation } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import SideListItem from './sideListItem'

const Sidebar = () => {
    return (
        <div className='bg-white w-1/6 h-full flex flex-col gap-3 px-3 py-4 overflow-auto shadow-sm'>
            <div className='flex gap-2 bg-screen h-14 text-sm items-center px-3 rounded-md cursor-pointer'>
                <Image
                    src={'/assets/profilePlaceholder.png'}
                    height={40}
                    width={40}
                    alt='profile'
                />
                <div>
                    <p className='font-semibold'>Branch Name</p>
                    <p className='text-xs text-red-500'>29 days left</p>
                </div>
            </div>
            <div className='w-full flex flex-col gap-3'>
                {sidebarNavigation.map((item) => (
                    <SideListItem key={item.id} {...item} />
                ))}
                <hr className='w-2/3 self-center' />
            </div>
            <div className='w-full flex flex-col gap-3 pl-5'>
                {SettingsNavigation.map((item) => (
                    <SideListItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
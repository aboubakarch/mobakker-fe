"use client"
import { SettingsNavigation } from '@/constants/constants'
import Image from 'next/image'
import React, { FC } from 'react'
import SideListItem from './SideListItem'
import { ISideBarProps } from '@/@types/sidebar'
import { NavigationHelperMap } from '@/constants/maps'

const Sidebar: FC<ISideBarProps> = ({ navigation }) => {
    const nav = NavigationHelperMap[navigation] ?? []

    return (
        <div className='bg-white w-1/6 h-full flex flex-col gap-3 px-3 py-4 overflow-auto shadow-sm scrollbar'>
            <div className='flex gap-2 bg-screen hover:bg-appcard h-16 text-sm items-center px-3 py-2 rounded-md cursor-pointer'>
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
                {nav.map((item) => (
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
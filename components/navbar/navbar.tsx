"use client"
import Image from 'next/image'
import React from 'react'
import { SearchInput } from '../ui/searchInput'
import { BellIcon, BulbIcon, ChevronDownIcon } from '@/svgs'
import IconButton from '../buttons/iconButton'

const Navbar = () => {
    return (
        <div className='flex w-full bg-white h-[80px] px-4'>
            <div className='flex-[0.5] flex justify-between items-center'>
                <div className='h-[60%] w-28'>

                    <Image
                        src={'/assets/logo.png'}
                        alt='Logo'
                        width={110}
                        height={55}
                    />
                </div>
                <SearchInput placeholder='Search' className='bg-screen w-[60%] focus-visible:ring-0 border-0' />
            </div>
            <div className='flex-[0.5] flex justify-end pr-4 items-center h-full gap-2'>
                <div className='flex gap-2'>
                    <IconButton>
                        <BulbIcon className='h-6 w-6' />
                    </IconButton>
                    <IconButton>
                        <BellIcon className='h-6 w-6' />
                    </IconButton>
                </div>
                {/* can be a separate component */}
                <div className='flex gap-2 bg-screen h-14 text-sm items-center px-3 rounded-md cursor-pointer'>
                    <div>
                        <p className='font-semibold'>Branch Manager</p>
                        <p className='text-end'>Lorem Ipsum</p>
                    </div>
                    <Image
                        src={'/assets/profilePlaceholder.png'}
                        height={40}
                        width={40}
                        alt='profile'
                    />
                    <ChevronDownIcon />
                </div>
            </div>
        </div>
    )
}

export default Navbar
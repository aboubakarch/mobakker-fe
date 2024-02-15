"use client"
import Image from 'next/image'
import React from 'react'
import { Input } from '../ui'

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
                <Input type='search' placeholder='Search' className='bg-[#f7f6fc] w-[60%] focus-visible:ring-0 border-0' />
            </div>
            <div className='flex-[0.5] flex justify-end'>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
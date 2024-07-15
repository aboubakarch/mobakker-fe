"use client"
import Image from 'next/image'
import React from 'react'
import { SearchInput } from '../ui/SearchInput'
import { BellIcon, BulbIcon, ChevronDownIcon } from '@/svgs'
import IconButton from '../buttons/IconButton'
import LanguageChanger from '../languageChanger/LanguageChanger'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui'
import { messages } from '@/constants/constants'
import { getCookie, isValidImageSrc, removeCookie } from '@/lib/helpers'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const { t } = useTranslation()
    const user = JSON.parse(getCookie("user") || "null")

    function formatRole(role: string): string {
        // Convert to lowercase, then capitalize the first letter of each word
        return role
            .toLowerCase()
            .split('_')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    const handleLogout = () => {
        removeCookie("accessToken")
        removeCookie("refreshToken")
        removeCookie("role")
        removeCookie("userId")
        removeCookie("user")
        location.reload()
    }
    return (
        <div className='flex w-full bg-white h-[75px] px-4 shadow-sm'>
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
            <div className='flex-[0.5] flex justify-end ltr:pr-4 rtl:pl-4 items-center h-full gap-2'>
                <div className='flex gap-2'>
                    <LanguageChanger selectClassName='border-[#EEF5E4] bg-screen' />
                    <IconButton>
                        <BulbIcon className='h-6 w-6' />
                    </IconButton>
                    <IconButton>
                        <BellIcon className='h-6 w-6' />
                    </IconButton>
                </div>

                {/* can be a separate component */}


                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className='flex gap-2 bg-screen h-14 text-sm items-center px-3 rounded-md cursor-pointer'>
                            <div>
                                <p className='font-semibold'>{user ? `${user?.firstName} ${user?.lastName}` : "Sample"}</p>
                                <p className='text-end'>{user ? formatRole(user?.role || "") : 'Role'}</p>
                            </div>
                            <Image
                                src={user && user.avatar && isValidImageSrc(user.avatar) ? user.avatar : '/assets/profilePlaceholder.png'}
                                height={40}
                                width={40}
                                alt='profile'
                                className='rounded-full'
                            />
                            <ChevronDownIcon />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56'>
                        {/* <DropdownMenuLabel>{t(messages.ACTIONS)}</DropdownMenuLabel> */}
                        <DropdownMenuItem onClick={handleLogout} className="text-black hover:bg-indigo-800 hover:bg-opacity-25">
                            {t(messages.LOGOUT)}
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}

export default Navbar
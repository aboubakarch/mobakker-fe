import React, { useEffect, useState } from 'react'
import IconButton from '../buttons/IconButton'
import { BellIcon } from '@/svgs'
import {
    Button,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui"
import { timeAgo } from '@/lib/helpers'
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu'
import APIService from '@/services/api'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { messages } from '@/constants/constants'
import { useTranslation } from 'react-i18next'

// const notifications = [
//     {
//         "id": "a6a60a1f-c228-4608-b42d-675e46f52a51",
//         "createdAt": "2024-07-27T06:26:50.670Z",
//         "updatedAt": "2024-07-27T06:26:50.670Z",
//         "isActive": true,
//         "isRead": true,
//         "notification": "Testing notification",
//         "timeRead": null,
//         "userId": "0dbff447-a719-4819-beae-129f5311f22c"
//     },
//     {
//         "id": "fc8cd302-a855-4705-8ae1-6021cfb77dab",
//         "createdAt": "2024-07-27T06:42:26.421Z",
//         "updatedAt": "2024-07-27T06:42:26.421Z",
//         "isActive": true,
//         "isRead": false,
//         "notification": "This is a test",
//         "timeRead": null,
//         "userId": "0dbff447-a719-4819-beae-129f5311f22c"
//     }
// ]

const Notifications = () => {
    const [unreadCount, setUnreadCount] = useState(0)
    const [flag, setFlag] = useState(false)
    const { t } = useTranslation()
    const [notifications, setNotifications] = useState<SysNotifications[]>([])

    const getUnreadCount = async () => {
        try {
            const unreadCount = await APIService.getInstance().getUnreadNotifications()
            setUnreadCount(unreadCount)
        } catch (error) {
            console.log(error)
        }
    }
    const getAllNotifications = async () => {
        try {
            const data = await APIService.getInstance().getNotifications()
            setNotifications(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUnreadCount()
        getAllNotifications()
    }, [flag])

    const markAsRead = async (notif: SysNotifications) => {
        try {
            const data = await APIService.getInstance().markNotication(notif.id)
            // setUnreadCount(0)
            setFlag(!flag)
        } catch (error) {
            console.log(error)
        }
    }
    const markAllAsRead = async () => {
        try {
            const data = await APIService.getInstance().markAllNotication()
            setFlag(!flag)

            // setUnreadCount(0)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className='inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 p-1 bg-screen relative'>
                    {unreadCount > 0 && <span className='absolute text-center h-4 w-4 text-xs rounded-full bg-red-600 text-white -top-2 -right-2'>{unreadCount}</span>}
                    <BellIcon className='h-6 w-6' />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='w-[400px] max-h-[600px] overflow-auto pb-4'>
                <DropdownMenuLabel className='flex flex-row justify-between items-center'>
                    <p className='text-xl'>{"Notifications"}</p>
                    {unreadCount > 0 && <Button onClick={markAllAsRead} variant={'link'} className='text-indigo-800 border-b-indigo-800'>Mark all as read</Button>}
                </DropdownMenuLabel>
                <div className='px-2 flex flex-col gap-1'>

                    {notifications.length > 0 && notifications.map(notif => (
                        <DropdownMenuItem key={notif.id} onClick={notif.isRead ? () => markAsRead(notif) : undefined} className={cn("border-b-[1px] border-slate-200 cursor-pointer", !notif.isRead ? "bg-indigo-800 bg-opacity-15 hover:brightness-95" : "bg-background hover:brightness-95")}>
                            <div>
                                <p className='text-base font-medium'>{notif.notification}</p>
                                <p className='text-sm'>{timeAgo(notif.createdAt)}</p>
                            </div>
                        </DropdownMenuItem>
                    ))}
                    {notifications.length === 0 && (
                        <div className='flex items-center justify-center flex-col pb-4'>
                            <Image src={'/assets/notificationBell.gif'} alt='notification' width={250} height={250} />
                            <h1 className='text-lg font-semibold'>{t(messages.NO_NOTIFICATIONS_RIGHT_NOW)}</h1>
                        </div>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default Notifications
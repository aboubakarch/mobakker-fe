"use client"
import { IPromotionItemProps } from '@/@types/dashboard'
import React, { FC } from 'react'
import { Switch } from '../ui/switch'

const PromotionItem: FC<IPromotionItemProps> = ({ title, startDate, endDate, active }) => {
    return (
        <div className='flex flex-col bg-white rounded-sm px-3 py-2'>
            <div className='flex justify-between w-full'>
                <p className='text-md '>{title}</p>
                <Switch className='data-[state=checked]:bg-primaryBlue' checked={active} onCheckedChange={() => console.log("first")} />
            </div>
            <p className='text-xs text-icon'>
                {startDate + " to " + endDate}
            </p>
        </div>
    )
}

export default PromotionItem
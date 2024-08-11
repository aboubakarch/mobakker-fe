"use client"
import { IPromotionItemProps } from '@/@types/dashboard'
import React, { FC } from 'react'
import { Switch } from '../ui/Switch'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'

const PromotionItem: FC<IPromotionItemProps> = ({ title, startDate, endDate, active, id, handleUpdate }) => {
    const { toast } = useToast()

    const handleChecked = async () => {
        await APIService.getInstance().updatePromotionStatus(id, { isActive: !active });
        handleUpdate()

        toast({
            description: "Promotion Updated!",
            variant: "success"
        })
    }
    return (
        <div className='flex flex-col bg-white rounded-sm px-3 py-2'>
            <div className='flex justify-between items-center w-full'>
                <p className='text-md text-sm'>{title}</p>
                <Switch className='data-[state=checked]:bg-primaryBlue' checked={active} onCheckedChange={handleChecked} />
            </div>
            <p className='text-xs text-icon'>
                {`${startDate} to ${endDate}`}
            </p>
        </div>
    )
}

export default PromotionItem
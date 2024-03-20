"use client"
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Subscriptions = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.REPORTS)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
                <Button className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_EMPLOYEES)}</Button>

            </PageHeader>
            <hr />
            <div className='rounded-md bg-white p-3'>
                <div className='flex justify-between w-full'>
                    <div className='flex-col justify-center items-start gap-2 inline-flex'>
                        <p className="text-center text-gray-500 text-sm font-normal  leading-normal">Pricing Table</p>
                        <p className='text-black text-3xl font-normal '>Our Pricing Plan</p>
                    </div>
                    <div className="w-[516px] flex justify-between  bg-gradient-to-b py-3 px-2 text-white from-emerald-900 to-indigo-800 rounded-lg" >
                        <div className='flex flex-col gap-3 h-full justify-between '>
                            <p className='text-sm font-medium '>YOUR CURRENT PACKAGE IS PRO</p>
                            <p className='text-sm font-medium '>72 Days Left</p>
                        </div>
                        <div className='h-full flex items-end justify-center'>
                            <Button variant={'default'} className='w-28 h-[26px] px-2.5 py-[3px] bg-emerald-500 hover:bg-emerald-400 rounded justify-center items-center gap-px inline-flex'>
                                <div className="text-white text-xs font-medium font-['Inter'] leading-tight">Renew Package</div>
                            </Button>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Subscriptions
"use client"
import { messages } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Card = ({
    children
}: ILayoutProps) => {
    const { t } = useTranslation();

    return (
        <div className='h-full w-full flex md:flex-row flex-col-reverse'>
            <div className='flex-[0.5] h-full'>
                {children}
            </div>
            <div className="flex-[0.5] h-full bg-[url(/assets/cardBG.jpg)] bg-cover flex justify-start relative items-center">
                <div className='flex h-full justify-between flex-col p-4'>
                    <div className='h-[27%] w-[90px] relative'>
                        <Image
                            src={"/assets/logoLarge.png"}
                            alt='Logo'
                            fill
                        />
                    </div>
                    <div className=' w-[100px] text-white font-3xl font-semibold'>
                        {t(messages.WELCOME)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
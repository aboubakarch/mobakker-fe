"use client"
import PaymentModal from '@/components/modal/PaymentModal'
import { Button } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Subscriptions = () => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)



    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <PaymentModal visible={isModalOpen} closeModal={() => setIsModalOpen(false)} />
            <PageHeader title={t(messages.SUBSCRIPTION)}
                description={t(messages.MONITOR_SUBSCRIPTION_PLANS)}
            >
                {/* <Button className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.CREATE_SUBSCRIPTION)}</Button> */}

            </PageHeader>
            <hr />
            <div className='rounded-md bg-background p-3 flex flex-col gap-6 mb-5'>
                <div className='flex justify-between w-full'>
                    <div className='flex-col justify-center items-start gap-2 inline-flex'>
                        <p className="text-center text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.PRICING_TABLE)}</p>
                        <p className='text-black dark:text-white text-3xl font-normal '>{t(messages.OUR_PRICING_PLAN)}</p>
                    </div>
                    <div className="w-[516px] flex justify-between  bg-gradient-to-b py-3 px-2 text-white from-emerald-900 to-indigo-800 rounded-lg" >
                        <div className='flex flex-col gap-3 h-full justify-between '>
                            <p className='text-sm font-medium '>{t(messages.YOUR_CURRENT_PACKAGE)}</p>
                            <p className='text-sm font-medium '>72 Days Left</p>
                        </div>
                        <div className='h-full flex items-end justify-center'>
                            <Button onClick={() => setIsModalOpen(true)} variant={'default'} className='w-28 h-[26px] px-2.5 py-[3px] bg-emerald-500 hover:bg-emerald-400 rounded justify-center items-center gap-px inline-flex'>
                                <div className="text-white text-xs font-medium leading-tight">{t(messages.RENEW_PACKAGE)}</div>
                            </Button>

                        </div>
                    </div>
                </div>
                <div className='w-full grid grid-cols-3 gap-7 px-4'>


                    <div className=" px-5 py-6 bg-indigo-800 bg-opacity-5 rounded-md border-2 flex-col justify-start items-start gap-6 inline-flex">
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-indigo-800 text-base font-semibold leading-relaxed'>{t(messages.BASIC_PACKAGE)}</h1>
                            <div className='flex items-center gap-2'>
                                <div className="text-black dark:text-white text-3xl font-semibold ">SR109</div>
                                <div className="text-gray-500 dark:text-white text-sm font-medium font-['Inter'] leading-normal">/ 1 month</div>
                            </div>
                            <div className="w-full text-gray-500 dark:text-white text-sm font-normal line-clamp-2 leading-normal">{t(messages.PERSONAL_WEBSITE_PROJECT)}</div>
                        </div>
                        <div className="w-full h-[0px] border border-zinc-200"></div>
                        <ul className='flex flex-col gap-3'>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">1 {t(messages.USER)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.ALL_UI_COMPONENTS)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.LIFETIME_ACCESS)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.FREE_UPDATES)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.USE_ON_PROJECT)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.THREE_MONTHS_SUPPORT)}</li>
                        </ul>
                        <Button onClick={() => setIsModalOpen(true)} variant={"default"} className='bg-indigo-800 bg-opacity-5 w-full hover:bg-indigo-800 hover:bg-opacity-15 rounded-md border border-zinc-200'>
                            <p className='text-indigo-800 text-base font-medium'>{t(messages.CHOOSE_BASIC)}</p>
                        </Button>
                    </div>



                    <div className=" px-5 py-6 bg-indigo-800  rounded-md border-2 flex-col justify-start items-start gap-6 inline-flex">
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-white text-base font-semibold leading-relaxed'>{t(messages.PRO_PACKAGE)}</h1>
                            <div className='flex items-center gap-2'>
                                <div className="text-white text-3xl font-semibold ">SR189</div>
                                <div className="text-white text-sm font-medium font-['Inter'] leading-normal">/3 month</div>
                            </div>
                            <div className="w-full text-white text-sm font-normal line-clamp-2 leading-normal">{t(messages.PERSONAL_WEBSITE_PROJECT)}</div>
                        </div>
                        <div className="w-full h-[0px] border border-white"></div>
                        <ul className='flex flex-col gap-3'>
                            <li className="w-full text-white text-sm font-normal  leading-normal">1 {t(messages.USER)}</li>
                            <li className="w-full text-white text-sm font-normal  leading-normal">{t(messages.ALL_UI_COMPONENTS)}</li>
                            <li className="w-full text-white text-sm font-normal  leading-normal">{t(messages.LIFETIME_ACCESS)}</li>
                            <li className="w-full text-white text-sm font-normal  leading-normal">{t(messages.FREE_UPDATES)}</li>
                            <li className="w-full text-white text-sm font-normal  leading-normal">{t(messages.USE_ON_PROJECT)}</li>
                            <li className="w-full text-white text-sm font-normal  leading-normal">{t(messages.THREE_MONTHS_SUPPORT)}</li>
                        </ul>
                        <Button variant={"default"} className='bg-background bg-opacity-95 w-full hover:bg-background hover:bg-opacity-85 rounded-md border border-zinc-200'>
                            <p className='text-indigo-800 text-base font-medium'>{t(messages.PAUSE)}</p>
                        </Button>
                    </div>



                    <div className=" px-5 py-6 bg-indigo-800 bg-opacity-5 rounded-md border-2 flex-col justify-start items-start gap-6 inline-flex">
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-indigo-800 text-base font-semibold leading-relaxed'>{t(messages.FULL_PACKAGE)}</h1>
                            <div className='flex items-center gap-2'>
                                <div className="text-black dark:text-white text-3xl font-semibold ">SR279</div>
                                <div className="text-gray-500 dark:text-white text-sm font-medium font-['Inter'] leading-normal">/ 1 month</div>
                            </div>
                            <div className="w-full text-gray-500 dark:text-white text-sm font-normal line-clamp-2 leading-normal">{t(messages.PERSONAL_WEBSITE_PROJECT)}</div>
                        </div>
                        <div className="w-full h-[0px] border border-zinc-200"></div>
                        <ul className='flex flex-col gap-3'>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">1 {t(messages.USER)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.ALL_UI_COMPONENTS)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.LIFETIME_ACCESS)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.FREE_UPDATES)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.USE_ON_PROJECT)}</li>
                            <li className="w-full text-gray-500 dark:text-white text-sm font-normal  leading-normal">{t(messages.THREE_MONTHS_SUPPORT)}</li>
                        </ul>
                        <Button onClick={() => setIsModalOpen(true)} variant={"default"} className='bg-indigo-800 bg-opacity-5 w-full hover:bg-indigo-800 hover:bg-opacity-15 rounded-md border border-zinc-200'>
                            <p className='text-indigo-800 text-base font-medium'>{t(messages.CHOOSE_FULL)}</p>
                        </Button>
                    </div>

                </div>

            </div>


        </div >
    )
}

export default Subscriptions
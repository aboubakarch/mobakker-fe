'use client';
import Card from '@/components/card/Card';
import { messages } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Page = () => {
    const { t } = useTranslation();
    const searchParams = useSearchParams()
    const status = searchParams.get("status") || ""
    console.log(searchParams)
    return (
        <div className='h-full w-full bg-gradient-to-br from-cyan-200 via-indigo-400 to-indigo-800 relative flex justify-center items-center'>
            <Link href={"/"}>
                <div className='h-[110px] w-[90px] absolute top-10 left-6 py-5'>
                    <Image
                        src={"/assets/logoLarge.png"}
                        alt='Logo'
                        fill
                    />
                </div>
            </Link>
            <div className='bg-background shadow-lg dark:shadow-white/10 dark:shadow-white rounded-md h-[60%] md:h-[60%] w-[90%] md:w-[30%] flex flex-col items-center '>
                {status === "paid" ?
                    <Image src={'/assets/success.gif'} alt='success' width={250} height={250} /> :
                    <Image src={'/assets/error.gif'} alt='error' width={250} height={250} />
                }
                <div className='text-lg font-semibold px-7 text-center'>
                    {status === "paid" ? t(messages.SUCCESS_SUBSCRIPTION) : t(messages.FAILED_SUBSCRIPTION)}
                </div>
            </div>

        </div>
    );
};

export default Page;

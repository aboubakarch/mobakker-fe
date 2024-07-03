'use client';
import Card from '@/components/card/Card';
import { useParams } from 'next/navigation';

import React from 'react';
import { useTranslation } from 'react-i18next';

const Page = () => {
    const { t } = useTranslation();
    const { slug } = useParams()

    return (
        <Card>
            <div className='h-full w-full flex items-center justify-center text-lg'>
                {slug}
            </div>
        </Card>
    );
};

export default Page;

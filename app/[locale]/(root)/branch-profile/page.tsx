"use client"
import AppForm from '@/components/form/Form'
import InputField from '@/components/form/FormField'
import { Button } from '@/components/ui'
import Dropzone from '@/components/ui/Dropzone'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { branchFormVals } from '@/constants/forms'
import { branchEditValidationSchema } from '@/constants/validationSchemas'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup';


const BranchProfile = () => {
    const { t } = useTranslation()
    const branchFormVal = branchFormVals()

    const onSubmit = (values: yup.InferType<typeof branchEditValidationSchema>) => {
        console.log(values);
    };
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={t(messages.BRANCH_PROFILE)}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
            </PageHeader>
            <div className='flex gap-4'>
                <div className='flex-[0.30] bg-background rounded py-5 flex gap-4 flex-col'>
                    <div className='w-full border-b border-neutral-200 px-4 pb-3 text-gray-800 dark:text-white text-xl font-medium '>
                        {t(messages.LOGO)}
                    </div>
                    <div className='flex flex-col w-full items-center px-4 gap-5'>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='w-28 h-28 relative rounded-full '>
                                <Image
                                    fill
                                    alt='profile'
                                    src={'/assets/profileImageFull.jpeg'}
                                    className='rounded-full'
                                />

                            </div>
                            <div className="flex">
                                <Button variant={"ghost"} className='text-indigo-800'>{t(messages.UPDATE)}</Button>
                                <Button variant={"ghost"} className='text-red-400'>{t(messages.DELETE)}</Button>
                            </div>
                        </div>

                        <Dropzone title={t(messages.UPLOAD_IMAGE)} subtitle={t(messages.IMAGE_FORMATS)} />
                    </div>

                </div>
                <div className='flex-[0.70] bg-background rounded'>

                    <AppForm
                        onSubmit={onSubmit}
                        className="px-3 py-4 flex gap-4 flex-col"
                        {...branchFormVal}>


                        <InputField {...branchFormVal.info(t).name} disabled={true} />


                        <InputField {...branchFormVal.info(t).location} disabled={true} />
                        {/* <InputField {...branchFormVal.info(t).details} disabled={true} /> */}


                    </AppForm>

                </div>

            </div>



        </div>
    )
}

export default BranchProfile
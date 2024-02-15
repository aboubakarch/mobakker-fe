
'use client'
import SubmitButton from '@/components/buttons/submitButton';
import CustomForm from '@/components/form/form';
import InputField from '@/components/form/formField';
import { Input } from '@/components/ui';
import { loginFormVals } from '@/constants/forms';
import { loginValidationSchema } from '@/constants/validationSchemas';
import Image from 'next/image'
import React from 'react'
import * as yup from 'yup'




const Page = () => {


    const onSubmit = (values: yup.InferType<typeof loginValidationSchema>) => {
        console.log(values)
    }

    return (
        <div className='h-full w-full flex px-3'>
            <div className="flex-[0.5] h-full py-10 px-5">
                <CustomForm onSubmit={onSubmit} className='flex flex-col gap-6' {...loginFormVals}>
                    <div className='flex flex-col gap-3'>
                        <InputField {...loginFormVals.info.username} />
                        <InputField {...loginFormVals.info.password} />
                    </div>
                    <div className='flex justify-between text-sm'>
                        <div className='flex gap-1 items-center'>
                            <Input type="checkbox" className='accent-[#694bdb] h-4 w-4' />
                            <p>Remember Me</p>
                        </div>
                        <p className='text-[#694bdb]'>Forgot Password</p>
                    </div>
                    <div>
                        <SubmitButton title='Login' className='w-full bg-[#694bdb]' />
                        <p className='text-sm flex gap-1'>
                            or
                            <span className='text-[#694bdb]'>register now!</span>
                        </p>
                    </div>
                </CustomForm>

            </div>
            <div className="flex-[0.5] h-full flex justify-center items-center">
                <div className='h-[50%] w-[50%] relative'>
                    <Image
                        src={'/assets/keyIllustration.png'}
                        alt="Key Note"
                        fill
                    />
                </div>
            </div>
        </div>
    )
}

export default Page
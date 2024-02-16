
'use client'
import SubmitButton from '@/components/buttons/submitButton';
import Card from '@/components/card/card';
import CustomForm from '@/components/form/form';
import InputField from '@/components/form/formField';
import { messages } from '@/constants/constants';
import { loginFormVals } from '@/constants/forms';
import { loginValidationSchema } from '@/constants/validationSchemas';
import React from 'react'
import * as yup from 'yup'




const Page = () => {


    const onSubmit = (values: yup.InferType<typeof loginValidationSchema>) => {
        console.log(values)
    }

    return (
        <Card>
            <CustomForm onSubmit={onSubmit} className='flex flex-col gap-6 justify-center h-full px-10' {...loginFormVals}>
                <h1 className='text-xl font-bold'>{messages.SIGN_IN}</h1>
                <div className='flex flex-col gap-3'>
                    <InputField {...loginFormVals.info.email} />
                    <InputField {...loginFormVals.info.password} />
                </div>


                <SubmitButton title='Login' className='w-full bg-primaryPurple' />
                <div className='flex justify-between text-sm'>
                    <p className=''>{messages.FORGOT_PASSWORD}</p>
                    <div className='flex gap-1 items-center'>
                        <p>{messages.DONT_HAVE_ACCOUNT}</p>
                        <p className='text-primaryPurple'>{messages.SIGN_Up}</p>
                    </div>
                </div>
            </CustomForm>
        </Card>
    )
}

export default Page
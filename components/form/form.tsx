'use client'
import { ICustomFormProps, IFormTemplate } from '@/@types/forms'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Form } from '../ui';

const CustomForm: FC<ICustomFormProps<IFormTemplate>> = ({ initialValues, onSubmit, validationSchema, children, className = "" }) => {
    const form = useForm<yup.InferType<typeof validationSchema>>({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
                {children}
            </form>
        </Form>
    )
}

export default CustomForm
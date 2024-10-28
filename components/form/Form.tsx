'use client'
import { IAppFormProps, IFormTemplate } from '@/@types/forms'
import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Form } from '../ui';

const AppForm: FC<IAppFormProps<IFormTemplate>> = ({ initialValues, onSubmit, validationSchema, children, className = "" }) => {
    const form = useForm<yup.InferType<typeof validationSchema>>({
        resolver: yupResolver(validationSchema),
        defaultValues: initialValues,
    })
    console.log(form.formState.errors)

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
                {children}
            </form>
        </Form>
    )
}

export default AppForm
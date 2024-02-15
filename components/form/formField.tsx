"use client"
import React, { FC } from 'react'
import { FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Input } from '../ui'
import { useFormContext } from 'react-hook-form'
import { IFormField } from '@/@types/forms'

const InputField: FC<IFormField> = ({ name, hasError, placeHolder, desc, label }) => {
    const form = useFormContext()
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    {label && <FormLabel>{label}</FormLabel>}
                    <FormControl>
                        <Input placeholder={placeHolder} {...field} />
                    </FormControl>
                    {desc && <FormDescription>
                        The name of your audio.
                    </FormDescription>}
                    {hasError && <FormMessage />}
                </FormItem>
            )}
        />
    )
}

export default InputField
"use client"
import React, { FC } from 'react'
import { FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Input } from '../ui'
import { useFormContext } from 'react-hook-form'
import { IFormField } from '@/@types/forms'
import { FieldTypesEnum } from '@/constants/enums'
import { Textarea } from '../ui/textarea'

const InputField: FC<IFormField> = ({ name, hasError, placeHolder, desc, label, type = FieldTypesEnum.Text }) => {
    const form = useFormContext()

    switch (type) {

        case FieldTypesEnum.Textarea:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>{label}</FormLabel>}
                            <FormControl>
                                <Textarea placeholder={placeHolder} {...field} />
                            </FormControl>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}
                />
            )

        case FieldTypesEnum.Text:
        default:
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
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}
                />
            )
    }
}

export default InputField
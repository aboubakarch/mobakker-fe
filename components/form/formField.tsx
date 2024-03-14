"use client"
import React, { FC } from 'react'
import { FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Input } from '../ui'
import { useFormContext } from 'react-hook-form'
import { IFormField } from '@/@types/forms'
import { FieldTypesEnum } from '@/constants/enums'
import { Textarea } from '../ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'

const InputField: FC<IFormField> = ({ name, hasError, placeHolder, desc, label, type = FieldTypesEnum.Text }) => {
    const form = useFormContext()

    switch (type) {
        case FieldTypesEnum.Select:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>{label}</FormLabel>}

                            <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger >
                                        <SelectValue placeholder={placeHolder} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="test">Test 1</SelectItem>
                                    <SelectItem value="test2">Test 2</SelectItem>
                                </SelectContent>
                            </Select>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />

            )

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
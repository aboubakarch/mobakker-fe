"use client"
import React, { FC } from 'react'
import {
    FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Input, Popover,
    PopoverContent,
    PopoverTrigger,
    Button,
    Calendar,
} from '../ui'
import { useFormContext } from 'react-hook-form'
import { IFormField } from '@/@types/forms'
import { FieldTypesEnum } from '@/constants/enums'
import { Textarea } from '../ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { EmployeeMultiSelect } from './MultiSelect'
import { DaysOfWeek } from '@/constants/constants'
import { Switch } from '../ui/Switch'
import _ from "lodash"
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import moment from 'moment'


const InputField: FC<IFormField> = ({ name, hasError, placeHolder, desc, label, type = FieldTypesEnum.Text }) => {
    const form = useFormContext()

    const handleDaySelect = (day: string, checked: boolean, setDays: (...event: any[]) => void, value: string[]) => {
        let newArray: (string)[] = []
        if (!checked) {
            newArray = [...value, day]
        } else {
            newArray = _.without(value, day)
        }
        setDays(newArray)
    }

    switch (type) {
        case FieldTypesEnum.DatePicker:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem >
                            {label && <FormLabel>{label}</FormLabel>}
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                moment(field.value).format("MMMM DD, YYYY")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                        }
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />
            )

        case FieldTypesEnum.DaysRadio:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem >
                            {label && <FormLabel>{label}</FormLabel>}
                            <div className='w-full grid grid-cols-3 gap-y-3 gap-x-2 grid-flow-row rounded-md  bg-background text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"'>
                                {DaysOfWeek.map(day => (
                                    <div key={day} className='flex gap-2'>
                                        <p className=''>{day.substring(0, 3)}</p>
                                        <Switch
                                            checked={_.includes(field.value, day)}
                                            onCheckedChange={() => handleDaySelect(day, _.includes(field.value, day), field.onChange, field.value)}
                                            className='data-[state=checked]:bg-primaryBlue' />
                                    </div>
                                ))}
                            </div>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />
            )

        case FieldTypesEnum.EmployeeSelect:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem >
                            {label && <FormLabel>{label}</FormLabel>}
                            <div className='flex h-10 w-full items-center rounded-md  bg-background text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"'>

                                <EmployeeMultiSelect selected={field.value} setSelected={field.onChange as any} />
                            </div>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />

            )

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
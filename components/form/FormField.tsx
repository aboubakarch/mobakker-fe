"use client"
import React, { FC } from 'react'
import {
    FormField, FormControl, FormDescription, FormItem, FormLabel, FormMessage, Input, Popover,
    PopoverContent,
    PopoverTrigger,
    Button,
    Calendar,
    Checkbox,
} from '../ui'
import { useFormContext } from 'react-hook-form'
import { IFormField } from '@/@types/forms'
import { FieldTypesEnum } from '@/constants/enums'
import { Textarea } from '../ui/Textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { EmployeeMultiSelect } from './MultiSelect'
import { DaysOfWeek, HourTimes } from '@/constants/constants'
import { Switch } from '../ui/Switch'
import _ from "lodash"
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import moment from 'moment'
import { SingleSearchSelect } from './SingleSearchSelect'

const testSelectData = [{
    name: "Test 3",
    value: "Test1"
}, {
    name: "Test 2",
    value: "Test2"
}]

const InputField: FC<IFormField> = ({ name, hasError, placeHolder, desc, label, fieldType = FieldTypesEnum.Text, disabled = false, data, type, times, dateDisabled }) => {
    const form = useFormContext()
    console.log(form)
    const selectData = data ? data : testSelectData
    // console.log("in form", selectData, label, fieldType)

    const handleDaySelect = (day: string, checked: boolean, setDays: (...event: any[]) => void, value: string[]) => {
        let newArray: (string)[] = []
        if (!checked) {
            newArray = [...value, day]
        } else {
            newArray = _.without(value, day)
        }
        setDays(newArray)
    }
    const handleSelectAll = (days: string[], checked: boolean, setDays: (...event: any[]) => void) => {
        let newArray: (string)[] = []
        if (!checked) {
            newArray = [...days]
        } else {
            newArray = []
        }
        setDays(newArray)
    }

    switch (fieldType) {
        case FieldTypesEnum.Checkbox:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem >
                            <div className='flex items-center justify-center gap-2  px-2 py-2'>
                                {label && <FormLabel>{label}</FormLabel>}
                                <FormControl>
                                    <Checkbox
                                        disabled={disabled}
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                            </div>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />
            )

        case FieldTypesEnum.HoursSelect:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem className='bg-indigo-800 bg-opacity-5 rounded p-3 flex flex-col'>
                            {label && <FormLabel>{label}</FormLabel>}

                            <div className='w-full grid grid-cols-4 gap-y-3 gap-x-2 grid-flow-row rounded-md   text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                                {times && times.length > 0 ? times.map(hour => (
                                    <div key={hour} className='flex items-center justify-center gap-4 bg-background px-2 py-2 rounded-sm'>
                                        <Checkbox
                                            disabled={disabled}
                                            checked={field.value === hour}
                                            onCheckedChange={() => field.onChange(hour)}
                                        // className='data-[state=checked]:bg-primaryBlue'
                                        />
                                        <p className=''>{hour}</p>
                                    </div>
                                )) : <p>No Slots Available</p>}
                            </div>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />
            )
        case FieldTypesEnum.TimeSlots:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={() => (
                        <FormItem className='bg-indigo-800 bg-opacity-5 rounded p-3 flex flex-col'>
                            {label && <FormLabel>{label}</FormLabel>}

                            <div className='w-full grid grid-cols-4 gap-y-3 gap-x-2 grid-flow-row rounded-md   text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                                {times && times.length > 0 ? times.map((hour: string) => (
                                    <div key={hour} className='flex  items-center justify-center gap-4 bg-background px-2 py-2 rounded-sm'>

                                        <p className=''>{hour}</p>
                                    </div>
                                )) : (
                                    <div><p>Please select times and slot</p></div>
                                )}
                            </div>
                            {desc && <FormDescription>
                                {desc}
                            </FormDescription>}
                            {hasError && <FormMessage />}
                        </FormItem>
                    )}

                />
            )
        case FieldTypesEnum.HoursCheck:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem className='bg-indigo-800 bg-opacity-5 rounded p-3 flex flex-col'>
                            {label && <FormLabel>{label}</FormLabel>}
                            <div className='flex items-center justify-center gap-4  px-2 py-2 rounded-sm self-start'>
                                <Checkbox
                                    disabled={disabled}
                                    checked={field.value.length === 8}
                                    onCheckedChange={() => handleSelectAll(HourTimes, field.value.length === 8, field.onChange)}
                                // className='data-[state=checked]:bg-primaryBlue'
                                />
                                <p className=''>Select All</p>
                            </div>
                            <div className='w-full grid grid-cols-4 gap-y-3 gap-x-2 grid-flow-row rounded-md   text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'>
                                {HourTimes.map(hour => (
                                    <div key={hour} className='flex items-center justify-center gap-4 bg-background px-2 py-2 rounded-sm'>
                                        <Checkbox
                                            disabled={disabled}
                                            checked={_.includes(field.value, hour)}
                                            onCheckedChange={() => handleDaySelect(hour, _.includes(field.value, hour), field.onChange, field.value)}
                                        // className='data-[state=checked]:bg-primaryBlue'
                                        />
                                        <p className=''>{hour}</p>
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
                                            disabled={disabled}
                                            variant={"outline"}
                                            className={cn(
                                                "w-full ltr:pl-3 rtl:pr-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value ? (
                                                moment(field.value).format("MMMM DD, YYYY")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ltr:ml-auto rtl:mr-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) =>
                                            date < (dateDisabled ? dateDisabled : new Date())
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
                                            disabled={disabled}
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

        case FieldTypesEnum.SingleSearchSelect:
            return (
                <FormField
                    control={form.control}
                    name={name}
                    render={({ field }) => (
                        <FormItem >
                            {label && <FormLabel>{label}</FormLabel>}
                            <div className='flex h-10 w-full items-center rounded-md  bg-background text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"'>

                                <SingleSearchSelect disabled={disabled} label={label} data={selectData as any} selected={field.value} setSelected={field.onChange as any} />
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

                                <EmployeeMultiSelect label={label} data={selectData as any} selected={field.value} setSelected={field.onChange as any} />
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

                            <Select disabled={disabled} onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger >
                                        <SelectValue placeholder={placeHolder} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {selectData.map(item => (
                                        <SelectItem key={item.value} value={`${item.value}`}>{item.name}</SelectItem>
                                    ))}
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
                                <Textarea
                                    disabled={disabled}
                                    placeholder={placeHolder}
                                    {...field} />
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
                                <Input
                                    disabled={disabled}
                                    placeholder={placeHolder}
                                    {...field}
                                    type={type} />
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
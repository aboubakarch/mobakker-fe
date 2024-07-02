"use client"
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'
import { IModalCompProps } from '@/@types/modals'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '@/components/ui';

import { yupResolver } from '@hookform/resolvers/yup'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { paymentValidationSchema } from '@/constants/validationSchemas'
import APIService from '@/services/api'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import InputMask from "@mona-health/react-input-mask";
import Image from 'next/image'
import { useToast } from '@/hooks/use-toast'
import { getCookie } from '@/lib/helpers'


// declare var Moyasar: any;

const PaymentModal: FC<IModalCompProps> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [subsciptions, setSubscriptions] = useState<any[] | null>(null)
    const [cardType, setCardType] = useState('');
    const [selectedSubsciption, setSelectedSubscription] = useState<any | null>(null)
    const form = useForm<yup.InferType<typeof paymentValidationSchema>>({
        resolver: yupResolver(paymentValidationSchema),
        defaultValues: {
            cvc: "",
            expiry: "",
            name: "",
            number: "",
            type: "creditcard"
        },
    })
    const fetchData = async () => {

        try {
            // const params = {
            //     page: 1, take: 100
            // }
            const response = await APIService.getInstance().getSubscriptions({})


            setSubscriptions(response.subscriptions)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    const onSubmit = async (values: yup.InferType<typeof paymentValidationSchema>) => {
        // setFormValues(values);
        // setOtpActive(true)
        setLoading(true)
        let user = getCookie("user")
        user = JSON.parse(user || "null");
        if (!user) {
            toast({
                description: "Something went wrong!",
                variant: "destructive"
            })
            closeModal()
            return
        }
        try {
            if (!val) {

                toast({
                    variant: "destructive",
                    description: "Error! Something went wrong",
                })
                closeModal()
                return

            }
            await APIService.getInstance().subscribeSubscription({
                branchId: val?.id,
                subscriptionId: selectedSubsciption.id,
                serviceProviderId: (user as any)?.serviceProvider?.id,
                amount: selectedSubsciption.price,
                source: {
                    type: values.type,
                    name: values.name,
                    number: values.number.replace(/\s+/g, ''),
                    year: values.expiry.split("/")[1],
                    month: values.expiry.split('/')[0],
                    cvc: values.cvc
                }


            } as any);
            setLoading(false)
            // location.reload()
            if (onUpdate) {
                onUpdate()
            }


            toast({
                description: "Subscribed",
                variant: "success"
            })
        } catch (error: any) {
            setLoading(false)

            toast({
                variant: "destructive",
                description: error?.response?.data?.message || "Error! Something went wrong",
            })
        }
        closeModal()
    };

    const handleToggle = (subs: any) => {
        if (selectedSubsciption) {
            setSelectedSubscription(subs.id === selectedSubsciption.id ? null : subs)
        } else {
            setSelectedSubscription(subs)
        }
    }
    const handleCardNumberChange = (value: string) => {
        if (value.startsWith('4')) {
            setCardType('Visa');
        } else if (/^5[1-5]/.test(value)) {
            setCardType('MasterCard');
        } else {
            setCardType('');
        }
    };


    return (
        <Modal visibility={visible} closeModal={closeModal} className='transition-all' position={2} >
            <div className='px-10 py-6 flex flex-col gap-5 transition-all' >

                <h1 className="text-center text-gray-900 text-xl font-semibold  leading-[30px]">{t("Buy Subscription")}</h1>
                <div className='flex flex-col gap-4 '>
                    {subsciptions && <div className='flex flex-col gap-2'>
                        <p className='text-sm'>Select Subscription</p>

                        <ToggleGroup className='justify-start flex-wrap' variant={'outline'} type="single">
                            {subsciptions?.map(subs => (
                                <ToggleGroupItem value={subs.id} key={subs.id} onClick={() => handleToggle(subs)}>
                                    <p  >{subs.duration}</p>
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>

                    </div>}

                    {selectedSubsciption && <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className='w-full flex flex-col gap-4'>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem className=' '>
                                        <FormLabel>Name on Card</FormLabel>
                                        <FormControl>
                                            <Input
                                                // disabled={disabled}
                                                placeholder={"Name"}
                                                {...field}
                                                type={"text"} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="number"
                                render={({ field }) => (
                                    <FormItem className=' '>
                                        <FormLabel>Card Number</FormLabel>
                                        <FormControl>
                                            <div className='relative'>

                                                <InputMask
                                                    mask="9999 9999 9999 9999"
                                                    maskPlaceholder={""}
                                                    onChange={(e: any) => {
                                                        field.onChange(e);
                                                        handleCardNumberChange(e.target.value.replace(/\s/g, ''));
                                                    }}
                                                >
                                                    <div className='relative'>

                                                        <Input
                                                            type="text"
                                                            placeholder={"1234 5678 9111 1213"}
                                                            autoComplete="cc-number"
                                                        />

                                                        {cardType !== "" && (
                                                            <Image
                                                                height={20}
                                                                width={30}
                                                                src={cardType === 'Visa' ? '/assets/visa.png' : '/assets/mastercard.jpg'}
                                                                alt={cardType}
                                                                className='absolute right-2 top-[8px]'
                                                            />
                                                        )}
                                                        {cardType === "" && (
                                                            <div
                                                                className='absolute right-2 bg-indigo-800 w-7 h-5 top-[8px]'
                                                            />
                                                        )}
                                                    </div>
                                                </InputMask>
                                            </div>
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className='flex gap-3'>
                                <FormField
                                    control={form.control}
                                    name="expiry"
                                    render={({ field }) => (
                                        <FormItem className=' '>
                                            <FormLabel>Expiry</FormLabel>
                                            <FormControl>

                                                <InputMask
                                                    mask="99/99"
                                                    maskPlaceholder={""}
                                                    onChange={(e: any) => {
                                                        field.onChange(e);
                                                    }}
                                                >
                                                    <Input
                                                        type="text"
                                                        placeholder={"MM/YY"}
                                                        autoComplete="cc-exp"
                                                    />

                                                </InputMask>
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="cvc"
                                    render={({ field }) => (
                                        <FormItem className=' '>
                                            <FormLabel>CVC</FormLabel>
                                            <FormControl>
                                                <InputMask
                                                    mask="999"
                                                    maskPlaceholder={""}
                                                    onChange={(e: any) => {
                                                        field.onChange(e);
                                                    }}
                                                >
                                                    <Input
                                                        // disabled={disabled}
                                                        placeholder={"CVC"}
                                                        type={"text"} />

                                                </InputMask>

                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <SubmitButton title={t("Subscribe")} loading={loading} className=" bg-indigo-800 disabled:bg-opacity-30 w-36 self-end" />
                        </form>
                    </Form>}
                </div>
            </div>
        </Modal >
    )
}

export default PaymentModal
"use client"
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { promotionValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { promotionFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'


const promotionType = [
    { name: "Fixed", value: "FIXED" },
    { name: "Percentage", value: "PERCENTAGE" }
]
const statusType = [
    { name: "Active", value: true },
    { name: "Inactive", value: false }
]


const PromotionModal: FC<IModalCompProps<SamplePromotions>> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const promotionFormVal = promotionFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [services, setServices] = useState<any[] | null>([])

    const fetchData = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getServices(params)

            const data = response?.items?.map((item: ServiceType) => ({
                name: item.name,
                value: item.id
            }))
            console.log(data)
            setServices(data)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const createNewPromotion = async (values: yup.InferType<typeof promotionValidationSchema>) => {
        // const userId = getCookie("userId");
        // const branch = {
        //     p: values.name,
        //     address: values.location,
        //     city: values.city,
        //     cover: "lkldls",
        //     // ownerId: userId,
        //     ownerId: "9ed6eeca-1659-4667-a2a0-2f68d3ad92d6",
        //     country: "Saudi Arab"
        // }
        console.log(values)
        const promo = { ...values, isActive: undefined }
        await APIService.getInstance().createPromotion(promo as any);
        setLoading(false)

        toast({
            description: "Promotion added!",
            variant: "default"
        })

    }
    const editPromotion = async (values: yup.InferType<typeof promotionValidationSchema>) => {

        console.log(values)
        await APIService.getInstance().editPromotion(val?.id as string, values);
        setLoading(false)

        toast({
            description: "Promotion Updated!",
            variant: "default"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof promotionValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            if (val) {
                await editPromotion(values)
            }
            else {
                await createNewPromotion(values)
            }
            // location.reload()
            if (onUpdate) {
                onUpdate()
            }
        } catch (error) {
            setLoading(false)

            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        closeModal()
    };

    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-5 py-4 flex gap-4 flex-col"
                {...promotionFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_PROMOTION)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>

                <div className='flex gap-2'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <InputField {...promotionFormVal.info(t).promoCode} />
                        <InputField {...promotionFormVal.info(t).startDate} />
                        <InputField data={promotionType} {...promotionFormVal.info(t).type} />
                        <InputField  {...promotionFormVal.info(t).description} />

                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <InputField data={services as any} disabled={!services} {...promotionFormVal.info(t).service} />
                        <InputField {...promotionFormVal.info(t).endDate} />

                        <InputField data={statusType as any} {...promotionFormVal.info(t).isActive} />


                    </div>


                </div>

                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={t(messages.SAVE)} className=" bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>

            </AppForm>
        </Modal>
    )
}

export default PromotionModal
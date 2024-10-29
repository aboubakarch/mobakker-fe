"use client"
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { loyaltyProgramValidationSchema, promotionValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { loyaltyProgramFormVals, promotionFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import { IFormValueObj, ILoyaltyProgramFormValues, IPromotionFormValues } from '@/@types/forms'
import { TFunction } from 'i18next'
import { useFormContext } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'
import { getCookie } from '@/lib/helpers'
import { RoleType } from '@/constants/enums'



const BranchPicker: FC<{
    loyalProgramFormVal: IFormValueObj<ILoyaltyProgramFormValues>, t: TFunction<"translation", undefined>, setLoading: any
}> = ({ loyalProgramFormVal, t, setLoading }) => {

    const form = useFormContext()
    const [branches, setBranches] = useState<any[] | null>([])
    const { toast } = useToast()
    const role = getCookie("role")
    let user: any = getCookie("user")
    user = JSON.parse(user || "null");

    const fetchData = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getBranches(params)

            const data = response?.items?.map((item: ServiceType) => ({
                name: item.name,
                value: item.id
            }))
            console.log(data)
            setBranches(data)
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }

    useEffect(() => {
        if (role !== RoleType.BRANCH_MANAGER) {
            fetchData()
        } else {
            form.setValue("branch", user?.employee?.branchId ? user?.employee?.branchId : undefined, {
                shouldValidate: true,
                shouldDirty: true
            })
        }
    }, [])

    return (
        <div className='flex gap-4 flex-col'>
            {role !== RoleType.BRANCH_MANAGER &&
                <InputField data={branches || []} disabled={!branches} {...loyalProgramFormVal.info(t).branch} />
            }
            <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                    <FormItem className='flex justify-center flex-col'>
                        <FormLabel>Rating</FormLabel>
                        <FormControl className="self-center">

                            <Rating
                                initialValue={field.value}
                                onClick={(val) => field.onChange(val)}
                                {...field}
                                SVGclassName="inline-block"
                            />
                        </FormControl>

                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    )
}


const LoyaltyProgramModal: FC<IModalCompProps<SampleLoyalPrograms>> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const loyaltyProgramVal = loyaltyProgramFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()


    const createNewLoyaltyProgram = async (values: yup.InferType<typeof loyaltyProgramValidationSchema>) => {

        console.log(values)
        await APIService.getInstance().createLoyaltyProgram(values as any);
        setLoading(false)

        toast({
            description: "Loyalty Program added!",
            variant: "success"
        })

    }
    const editPromotion = async (values: yup.InferType<typeof loyaltyProgramValidationSchema>) => {

        console.log(values)
        await APIService.getInstance().editLoyalProgram(val?.id as string, values);
        setLoading(false)

        toast({
            description: "Loyalty Program Updated!",
            variant: "success"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof loyaltyProgramValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            if (val) {
                await editPromotion(values)
            }
            else {
                await createNewLoyaltyProgram(values)
            }
            // location.reload()
            if (onUpdate) {
                onUpdate()
            }
        } catch (error: any) {
            setLoading(false)

            toast({
                variant: "destructive",
                description: error?.response?.data?.message ? JSON.stringify(error?.response?.data?.message) : "Error! Something went wrong",
            })
        }
        closeModal()
    };

    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-5 py-4 flex gap-4 flex-col"
                {...loyaltyProgramVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black dark:text-white text-xl font-medium  leading-[30px]'>{!val ? t("Add Loyalty Program") : t(messages.UPDATE)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>
                </div>

                <div className='flex gap-2 flex-col gap-4'>


                    {/* <DatePickers promotionFormVal={promotionFormVal} t={t} /> */}


                    <InputField  {...loyaltyProgramVal.info(t).noOfBooking} />

                    <BranchPicker setLoading={setLoading} loyalProgramFormVal={loyaltyProgramVal} t={t} />

                </div>

                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={!val ? t(messages.SAVE) : t(messages.EDIT)} className=" bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>

            </AppForm>
        </Modal>
    )
}

export default LoyaltyProgramModal
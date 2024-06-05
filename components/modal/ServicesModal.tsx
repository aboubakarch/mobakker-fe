"use client"
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { serviceValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { serviceFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import { useFormContext } from 'react-hook-form'
import { IFormValueObj, IServiceFormValues } from '@/@types/forms'
import { TFunction } from 'i18next'
import { format, parse, addMinutes, isBefore, isEqual } from 'date-fns';

const timeSlotData = [
    {
        name: "15 minutes",
        value: "15"
    },
    {
        name: "30 minutes",
        value: "30"
    },
    {
        name: "45 minutes",
        value: "45"
    },
    {
        name: "60 minutes",
        value: "60"
    },
]


const ServiceForm: FC<{
    serviceFormVal: IFormValueObj<IServiceFormValues>, t: TFunction<"translation", undefined>, serviceTypes: any[] | null
}> = ({ serviceFormVal, t, serviceTypes }) => {
    const form = useFormContext()
    const startHour = form.watch("startHour")
    const slotTime = form.watch("slotTime")
    const endHour = form.watch("endHour")
    const [timeSlots, setTimeSlots] = useState<string[] | null>(null)


    function divideTimeIntoSlots(startTimeStr: string, endTimeStr: string, slotDuration: number): string[] {
        // Define the input and output time formats
        const inputTimeFormat = 'HH:mm';
        const outputTimeFormat = 'hh:mm a';

        // Parse the input time strings into Date objects
        const startTime = parse(startTimeStr, inputTimeFormat, new Date());
        let endTime = parse(endTimeStr, inputTimeFormat, new Date());

        // Handle the case where end time is on the next day
        if (endTime <= startTime) {
            endTime = addMinutes(endTime, 24 * 60);
        }

        // Generate the slots
        const slots: string[] = [];
        let currentTime = startTime;

        while (isBefore(currentTime, endTime)) {
            const nextTime = addMinutes(currentTime, slotDuration);
            if (isBefore(nextTime, endTime) || isEqual(nextTime, endTime)) {
                const slotStr = `${format(currentTime, outputTimeFormat)}-${format(nextTime, outputTimeFormat)}`;
                slots.push(slotStr);
                currentTime = nextTime;
            } else {
                const slotStr = `${format(currentTime, outputTimeFormat)}-${format(endTime, outputTimeFormat)}`;
                slots.push(slotStr);
                break;
            }
        }

        return slots;
    }

    // useEffect(() => {
    //     form.register("serviceAvailabilty")
    //     return form.unregister("serviceAvailabilty")
    // }, [])



    useEffect(() => {
        if (startHour !== "" && endHour !== "" && slotTime && slotTime !== "") {
            const slots = divideTimeIntoSlots(startHour, endHour, parseInt(slotTime))

            form.setValue("serviceAvailabilty", slots)

            setTimeSlots(slots)
        }
        else {
            form.setValue("serviceAvailabilty", [])
            setTimeSlots(null)
        }
    }, [startHour, endHour, slotTime, form])

    return (
        <div className='flex flex-col gap-2'>

            <div className='flex gap-2'>
                <div className='flex-1 flex flex-col gap-4'>
                    <InputField {...serviceFormVal.info(t).name} />
                    <InputField data={serviceTypes as any[]} disabled={!serviceTypes} {...serviceFormVal.info(t).serviceType} />
                    <InputField data={timeSlotData as any[]}  {...serviceFormVal.info(t).slotTime} />

                </div>
                <div className='flex-1 flex flex-col gap-4'>
                    <InputField {...serviceFormVal.info(t).price} />
                    <div className='flex gap-2'>
                        <div className='flex-1'>
                            <InputField {...serviceFormVal.info(t).startHour} />

                        </div>
                        <div className='flex-1 self-end '>

                            <InputField {...serviceFormVal.info(t).endHour} />
                        </div>
                    </div>

                    {/* {timeSlots && timeSlots.length > 0 && timeSlots.map((slot: string, i: number) => (
                    <div key={i}>
                    {slot}
                    </div>
                ))} */}


                </div>


            </div>
            <InputField {...serviceFormVal.info(t).serviceAvailabilty} times={timeSlots || undefined} />
        </div>
    )
}
const ServiceModal: FC<IModalCompProps> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const serviceFormVal = serviceFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [serviceTypes, setServiceTypes] = useState<any[] | null>([])


    const fetchData = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 30
            }
            const response = await APIService.getInstance().getServiceType(params)

            const data = response?.items?.map((item: ServiceType) => ({
                name: item.name,
                value: item.id
            }))
            setServiceTypes(data)
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


    const createNewService = async (values: yup.InferType<typeof serviceValidationSchema>) => {
        console.log(values.startHour, values.endHour)

        const startTime = values.startHour.split(':').map(Number);
        const endTime = values.endHour.split(':').map(Number);

        // Create a new Date object with the current date and the input time
        const currentDate = new Date(); // Current date
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), startTime[0], startTime[1]);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), endTime[0], endTime[1]);


        const service = {
            name: values.name,
            price: values.price,
            slotTime: `${values.slotTime} minutes`,
            avatar: "string",
            availablity: values.serviceAvailabilty,
            workHourFrom: startDate,
            workHourTo: endDate,
            serviceTypeId: values.serviceType,
            providerId: "9ed6eeca-1659-4667-a2a0-2f68d3ad92d6",
        }
        await APIService.getInstance().createService(service as any);
        setLoading(false)

        toast({
            description: "Service added!",
            variant: "default"
        })

    }
    const editService = async (values: yup.InferType<typeof serviceValidationSchema>) => {

        const startTime = values.startHour.split(':').map(Number);
        const endTime = values.endHour.split(':').map(Number);

        // Create a new Date object with the current date and the input time
        const currentDate = new Date(); // Current date
        const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), startTime[0], startTime[1]);
        const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), endTime[0], endTime[1]);

        const service = {
            name: values.name,
            price: values.price,
            slotTime: values.slotTime,
            availablity: values.serviceAvailabilty.join(","),
            workHourFrom: startDate,
            workHourTo: endDate,
            serviceTypeId: values.serviceType,
            providerId: "9ed6eeca-1659-4667-a2a0-2f68d3ad92d6",
        }
        await APIService.getInstance().editService(val?.id as string, service as any);
        setLoading(false)

        toast({
            description: "Service Updated!",
            variant: "default"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof serviceValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            if (val) {
                await editService(values)
            }
            else {
                await createNewService(values)
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
                className="px-3 py-4 flex gap-4 flex-col"
                {...serviceFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_SERVICE)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div>

                    <Dropzone title='Upload Service Logo' />
                </div>

                <ServiceForm serviceFormVal={serviceFormVal} serviceTypes={serviceTypes} t={t} />
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

export default ServiceModal
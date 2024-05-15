"use client"
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { appointmentValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { appointmentFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'


const repeatOptions = [
    { name: "Daily", value: "DAILY" },
    { name: "Weekly", value: "WEEKLY" },
    { name: "Monthly", value: "MONTHLY" },
    { name: "Yearly", value: "YEARLY" }
];

const paymentStatusOptions = [
    { name: "Pending", value: "PENDING" },
    { name: "Paid", value: "PAID" },
    { name: "Approved", value: "APPROVED" }
];

const paymentTypeOptions = [
    { name: "Cash", value: "CASH" },
    { name: "Card", value: "CARD" },
    { name: "Transfer", value: "TRANSFER" }
];

const statusOptions = [
    { name: "Pending", value: "PENDING" },
    { name: "Started", value: "STARTED" },
    { name: "Completed", value: "COMPLETED" },
    { name: "Canceled", value: "CANCELED" },
    { name: "Rejected", value: "REJECTED" }
];

const AppointmentModal: FC<IModalCompProps<SampleAppointments>> = ({ closeModal, visible, val }) => {
    const { t } = useTranslation();
    const { toast } = useToast()
    const appointmentFormVal = appointmentFormVals(val)
    const [loading, setLoading] = useState(false)
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


    const onSubmit = (values: yup.InferType<typeof appointmentValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...appointmentFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_APPOINTMENT)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>                </div>

                <div className='flex flex-col gap-4'>
                    <div className=' grid grid-cols-3 gap-2 w-full'>
                        <InputField {...appointmentFormVal.info(t).branchId} />
                        <InputField {...appointmentFormVal.info(t).bookedBy} />
                        <InputField {...appointmentFormVal.info(t).employeeId} />

                    </div>
                    <div className='grid grid-cols-3 gap-2 w-full'>
                        <InputField {...appointmentFormVal.info(t).bookingDate} />


                        <InputField data={paymentStatusOptions} {...appointmentFormVal.info(t).paymentStatus} />
                        <InputField data={statusOptions} {...appointmentFormVal.info(t).status} />
                    </div>

                    <InputField data={services as any} disabled={!services} {...appointmentFormVal.info(t).service} />

                    <InputField data={repeatOptions} {...appointmentFormVal.info(t).repeat} />
                    <InputField data={paymentTypeOptions} {...appointmentFormVal.info(t).paymentType} />
                    <div className='flex gap-2'>
                        <InputField {...appointmentFormVal.info(t).grossTotalAmount} />
                        <InputField {...appointmentFormVal.info(t).netTotalAmount} />
                        <InputField {...appointmentFormVal.info(t).discount} />

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

export default AppointmentModal
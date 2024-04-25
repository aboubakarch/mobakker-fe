"use client"
import React, { FC } from 'react'
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


const AppointmentModal: FC<IModalCompProps<SampleAppointments>> = ({ closeModal, visible, val }) => {
    const { t } = useTranslation();
    const appointmentFormVal = appointmentFormVals(val)


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
                        <InputField {...appointmentFormVal.info(t).category} />
                        <InputField {...appointmentFormVal.info(t).service} />
                        <InputField {...appointmentFormVal.info(t).employees} />

                    </div>
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <InputField {...appointmentFormVal.info(t).date} />


                        <InputField {...appointmentFormVal.info(t).paymentType} />
                    </div>


                    <InputField {...appointmentFormVal.info(t).hours} />
                    <div className='flex gap-2'>
                        <InputField {...appointmentFormVal.info(t).repeatDay} />
                        <InputField {...appointmentFormVal.info(t).repeatWeek} />
                        <InputField {...appointmentFormVal.info(t).repeatMonth} />

                    </div>


                </div>

                <div className='self-end flex gap-3'>
                    <SubmitButton title={t(messages.SAVE)} className=" bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>

            </AppForm>
        </Modal>
    )
}

export default AppointmentModal
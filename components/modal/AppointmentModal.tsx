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


const AppointmentModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();

    const onSubmit = (values: yup.InferType<typeof appointmentValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...appointmentFormVals}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_APPOINTMENT)}</p>
                    <X onClick={closeModal} className='w-4 h-4 relative text-black' />
                </div>

                <div className='flex flex-col gap-4'>
                    <div className=' grid grid-cols-3 gap-2 w-full'>
                        <InputField {...appointmentFormVals.info(t).category} />
                        <InputField {...appointmentFormVals.info(t).service} />
                        <InputField {...appointmentFormVals.info(t).employees} />

                    </div>
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <InputField {...appointmentFormVals.info(t).date} />


                        <InputField {...appointmentFormVals.info(t).paymentType} />
                    </div>


                    <InputField {...appointmentFormVals.info(t).hours} />
                    <div className='flex flex-row gap-2'>
                        <InputField {...appointmentFormVals.info(t).repeatDay} />
                        <InputField {...appointmentFormVals.info(t).repeatWeek} />
                        <InputField {...appointmentFormVals.info(t).repeatMonth} />

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
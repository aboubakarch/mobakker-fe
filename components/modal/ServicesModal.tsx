"use client"
import React, { FC } from 'react'
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


const ServiceModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();

    const onSubmit = (values: yup.InferType<typeof serviceValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...serviceFormVals}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_SERVICE)}</p>
                    <X onClick={closeModal} className='w-4 h-4 relative text-black' />
                </div>
                <div>

                    <Dropzone title='Upload Service Logo' />
                </div>
                <div className='flex flex-row gap-2'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <InputField {...serviceFormVals.info(t).name} />
                        <InputField {...serviceFormVals.info(t).serviceType} />
                        <InputField {...serviceFormVals.info(t).employees} />

                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <InputField {...serviceFormVals.info(t).price} />
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <InputField {...serviceFormVals.info(t).startHour} />

                            </div>
                            <div className='flex-1 self-end '>

                                <InputField {...serviceFormVals.info(t).endHour} />
                            </div>
                        </div>
                        <InputField {...serviceFormVals.info(t).serviceAvailabilty} />


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

export default ServiceModal
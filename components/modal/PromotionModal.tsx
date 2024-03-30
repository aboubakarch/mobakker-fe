"use client"
import React, { FC } from 'react'
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


const PromotionModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();

    const onSubmit = (values: yup.InferType<typeof promotionValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-5 py-4 flex gap-4 flex-col"
                {...promotionFormVals}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_PROMOTION)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>

                <div className='flex gap-2'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <InputField {...promotionFormVals.info(t).name} />
                        <InputField {...promotionFormVals.info(t).date} />
                        <InputField {...promotionFormVals.info(t).employees} />

                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <InputField {...promotionFormVals.info(t).category} />

                            </div>
                            <div className='flex-1 self-end '>

                                <InputField {...promotionFormVals.info(t).capacity} />
                            </div>
                        </div>
                        <InputField {...promotionFormVals.info(t).time} />
                        <InputField {...promotionFormVals.info(t).status} />


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

export default PromotionModal
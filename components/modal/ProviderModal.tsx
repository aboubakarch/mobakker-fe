import React, { FC } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { providerValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { providerFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'

const ProviderModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();
    const onSubmit = (values: yup.InferType<typeof providerValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...providerFormVals}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_PROVIDER)}</p>
                    <X onClick={closeModal} className='w-4 h-4 relative text-black' />
                </div>
                <div>

                    <Dropzone title='Upload Profile Image' />
                </div>
                <div className='flex gap-3 w-full'>
                    <div className='flex-1'>
                        <InputField {...providerFormVals.info(t).name} />

                    </div>
                    <div className='flex-1'>
                        <InputField {...providerFormVals.info(t).password} />

                    </div>

                </div>
                <InputField {...providerFormVals.info(t).details} />
                <div className='self-end flex gap-3'>
                    <SubmitButton title={t(messages.ADD_PROVIDER)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default ProviderModal
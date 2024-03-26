import React, { FC } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { branchValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { branchFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'

const BranchModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();
    const onSubmit = (values: yup.InferType<typeof branchValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...branchFormVals}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_BRANCH)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div>

                    <Dropzone title='Upload Logo' />
                </div>
                <div className='flex gap-3 w-full'>
                    <div className='flex-1'>
                        <InputField {...branchFormVals.info(t).name} />

                    </div>
                    <div className='flex-1'>
                        <InputField {...branchFormVals.info(t).password} />

                    </div>

                </div>
                <InputField {...branchFormVals.info(t).location} />
                <InputField {...branchFormVals.info(t).details} />
                <div className='self-end flex gap-3'>
                    <SubmitButton title={t(messages.ADD_BRANCH)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default BranchModal
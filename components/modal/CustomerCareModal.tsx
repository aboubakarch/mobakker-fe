import React, { FC, useState } from 'react'
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
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'

const CustomerCareModal: FC<IModalCompProps<SampleProvider>> = ({ closeModal, visible, val }) => {
    const { t } = useTranslation();
    const providerFormVal = providerFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const onSubmit = async (values: yup.InferType<typeof providerValidationSchema>) => {
        setLoading(true)
        try {
            await APIService.getInstance().registerCustomerCare(values as any);
            setLoading(false)

            toast({
                description: "Customer Care Representative added!",
                variant: "success"
            })
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
                {...providerFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_REPRESENTATIVE)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div>

                    <Dropzone title='Upload Profile Image' />
                </div>
                <div className='flex gap-3 w-full'>
                    <div className='flex-1'>
                        <InputField {...providerFormVal.info(t).firstName} />

                    </div>
                    <div className='flex-1'>
                        <InputField {...providerFormVal.info(t).lastName} />

                    </div>

                </div>
                <div className='flex gap-3 w-full'>
                    <div className='flex-1'>
                        <InputField {...providerFormVal.info(t).email} />

                    </div>
                    <div className='flex-1'>
                        <InputField {...providerFormVal.info(t).phone} />

                    </div>

                </div>
                <InputField {...providerFormVal.info(t).password} />
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={t(messages.ADD_REPRESENTATIVE)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default CustomerCareModal
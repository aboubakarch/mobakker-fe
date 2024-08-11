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
import { convertToFormData } from '@/lib/helpers'
import APIService from '@/services/api'

const CustomerModal: FC<IModalCompProps> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const providerFormVal = providerFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [image, setImage] = useState<File | null>(null);


    const createNewProvider = async (values: yup.InferType<typeof providerValidationSchema>) => {
        // const userId = getCookie("userId");
        const formData = convertToFormData({
            ...values, avatar: image ? image : undefined,
        })

        await APIService.getInstance().registerCustomer(formData as any);
        setLoading(false)

        toast({
            description: "User added!",
            variant: "success"
        })

    }
    const editProvider = async (values: yup.InferType<typeof providerValidationSchema>) => {
        const vals = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            avatar: image ? image : undefined,
        }
        const formData = convertToFormData(vals)

        await APIService.getInstance().editCustomer(val?.id as string, formData as any);
        setLoading(false)

        toast({
            description: "User Updated!",
            variant: "success"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof providerValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            if (val) {
                await editProvider(values)
            }
            else {
                await createNewProvider(values)
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
                className="px-3 py-4 flex gap-4 flex-col"
                {...providerFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{val ? t(messages.UPDATE) : t(messages.CREATE_USER)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>

                <Dropzone title='Upload Profile Image' onFileSelect={(file) => setImage(file)} url={val?.avatar || undefined} />
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
                {!val && <InputField {...providerFormVal.info(t).password} />}
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={val ? t(messages.EDIT) : t(messages.CREATE_USER)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default CustomerModal
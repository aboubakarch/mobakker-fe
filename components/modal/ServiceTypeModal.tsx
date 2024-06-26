import React, { FC, useState } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { serviceTypeValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { serviceTypeFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'

import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'
// import { getCookie } from '@/lib/helpers'






const ServiceTypeModal: FC<IModalCompProps<ServiceType>> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const serviceTypeFormVal = serviceTypeFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    // console.log("states", states)

    const createNewServiceType = async (values: yup.InferType<typeof serviceTypeValidationSchema>) => {
        // const userId = getCookie("userId");
        const branch = {
            name: values.name,
            avatar: "nldn"
        }
        await APIService.getInstance().createServiceType(branch as any);
        setLoading(false)

        toast({
            description: "Service Type added!",
            variant: "success"
        })

    }
    const editServiceType = async (values: yup.InferType<typeof serviceTypeValidationSchema>) => {

        const branch = {
            name: values.name,
            avatar: "nldn"

        }
        await APIService.getInstance().editServiceType(val?.id as string, branch as any);
        setLoading(false)

        toast({
            description: "Service Updated!",
            variant: "success"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof serviceTypeValidationSchema>) => {
        setLoading(true)
        try {

            if (val) {
                await editServiceType(values)
            }
            else {
                await createNewServiceType(values)
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
                {...serviceTypeFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_BRANCH)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div>

                    <Dropzone title='Upload Logo' />
                </div>

                <InputField {...serviceTypeFormVal.info(t).name} />



                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={val ? t(messages.EDIT) : t(messages.ADD_SERVICE_TYPE)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default ServiceTypeModal
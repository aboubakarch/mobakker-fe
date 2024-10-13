import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { assignServiceValidationSchema, providerValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { assignServicesFormVals, providerFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'

const AssignServiceModal: FC<IModalCompProps<SampleBranch>> = ({ closeModal, val, visible, onUpdate }) => {
    const { t } = useTranslation();
    const providerFormVal = assignServicesFormVals()
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
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
            console.log(data)
            setServices(data)
        } catch (error: any) {
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



    const onSubmit = async (values: yup.InferType<typeof assignServiceValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {
            if (!val) {

                toast({
                    variant: "destructive",
                    description: "Error! Something went wrong",
                })
            }

            await APIService.getInstance().assignService(val?.id as any, values.services as any);
            setLoading(false)
            // location.reload()
            if (onUpdate) {
                onUpdate()
            }


            toast({
                description: "Services added!",
                variant: "success"
            })
        } catch (error: any) {
            setLoading(false)

            toast({
                variant: "destructive",
                description: error?.response?.data?.message || "Error! Something went wrong",
            })
        }
        closeModal()
    };



    return (
        <Modal visibility={visible} closeModal={closeModal} position={2}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...providerFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black dark:text-white text-xl font-medium  leading-[30px]'>{t(messages.SERVICES)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>
                </div>


                <InputField {...providerFormVal.info(t).services} data={(services as any) || undefined} disabled={!services} />
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={t(messages.ASSIGN_SERVICES)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default AssignServiceModal
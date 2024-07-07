import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { assignBranchValidationSchema, assignServiceValidationSchema, providerValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { assignBranchFormVals, assignServicesFormVals, providerFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'

const AssignBranchModal: FC<IModalCompProps<SampleBranchManager>> = ({ closeModal, val, visible, onUpdate }) => {
    const { t } = useTranslation();
    const providerFormVal = assignBranchFormVals()
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [branches, setBranches] = useState<any[] | null>([])

    const fetchData = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getBranches(params)

            const data = response?.items?.map((item: ServiceType) => ({
                name: item.name,
                value: item.id
            }))
            console.log(data)
            setBranches(data)
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



    const onSubmit = async (values: yup.InferType<typeof assignBranchValidationSchema>) => {
        setLoading(true)
        try {
            if (!val) {

                toast({
                    variant: "destructive",
                    description: "Error! Something went wrong",
                })
            }
            console.log(val)

            await APIService.getInstance().patchEmployee((val as any)?.employeeId as any, {
                // rating: 0,
                userId: val?.id,
                employerId: (val as any)?.employerId,
                branchId: values.branch

            } as any);
            setLoading(false)
            // location.reload()
            if (onUpdate) {
                onUpdate()
            }


            toast({
                description: "Added to branch!",
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
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.BRANCH)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>


                <InputField {...providerFormVal.info(t).branch} data={(branches as any) || undefined} disabled={!branches} />
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={t(messages.BRANCH)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default AssignBranchModal
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { assignBranchValidationSchema, assignEmployeeValidationSchema, assignServiceValidationSchema, providerValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { assignBranchFormVals, assignEmployeeFormVals, assignServicesFormVals, providerFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'

const AssignEmployeeModal: FC<IModalCompProps<SampleAppointments>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();
    const providerFormVal = assignEmployeeFormVals()
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [branches, setBranches] = useState<any[] | null>([])

    const fetchData = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 100, branchId: val?.branchId
            }
            const response = await APIService.getInstance().getEmployees(params)

            const data = response?.items?.map((item: any) => ({
                name: (item.user.firstName || "") + " " + (item.user.lastName || ""),
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



    const onSubmit = async (values: yup.InferType<typeof assignEmployeeValidationSchema>) => {
        setLoading(true)
        console.log("first")
        try {
            if (!val) {

                toast({
                    variant: "destructive",
                    description: "Error! Something went wrong",
                })
            }

            await APIService.getInstance().editAppointment((val as any)?.id as any, {
                // rating: 0,
                employeeId: values.employee,

            } as any);
            setLoading(false)
            // location.reload()
            location.reload()


            toast({
                description: "Update!",
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
        <Modal visibility={visible} closeModal={closeModal} position={3}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...providerFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black dark:text-white text-xl font-medium  leading-[30px]'>{t(messages.EMPLOYEES)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>
                </div>


                <InputField {...providerFormVal.info(t).employee} data={(branches as any) || undefined} disabled={!branches} />
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={t(messages.SELECT)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default AssignEmployeeModal
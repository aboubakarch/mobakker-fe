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

const EmployeeModal: FC<IModalCompProps> = ({ closeModal, visible, onUpdate, val }) => {
    const { t } = useTranslation();
    const providerFormVal = providerFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const createNewEmployee = async (values: yup.InferType<typeof providerValidationSchema>) => {
        // const userId = getCookie("userId");

        await APIService.getInstance().registerEmployees(values as any);
        setLoading(false)

        toast({
            description: "Employee added!",
            variant: "success"
        })

    }
    const editEmployee = async (values: yup.InferType<typeof providerValidationSchema>) => {
        const vals = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            phone: values.phone,
            role: val.role
        }

        await APIService.getInstance().editUser(val?.id as string, vals as any);
        setLoading(false)

        toast({
            description: "Employee Updated!",
            variant: "success"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof providerValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            if (val) {
                await editEmployee(values)
            }
            else {
                await createNewEmployee(values)
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
                {...providerFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_EMPLOYEE)}</p>
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
                {!val && <InputField {...providerFormVal.info(t).password} />}
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={val ? t(messages.EDIT) : t(messages.ADD_EMPLOYEE)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default EmployeeModal
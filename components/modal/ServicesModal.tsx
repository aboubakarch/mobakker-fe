import React, { FC, useState } from 'react'
import Modal from './Modal'
import Dropzone from '../ui/Dropzone'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { employeeValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { employeeFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import { EmployeeMultiSelect } from '../form/MultiSelect'

const ServiceModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState<string[]>([])

    const onSubmit = (values: yup.InferType<typeof employeeValidationSchema>) => {
        console.log(values);
    };
    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...employeeFormVals}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_EMPLOYEE)}</p>
                    <X onClick={closeModal} className='w-4 h-4 relative text-black' />
                </div>
                <div>

                    <Dropzone title='Upload Profile' />
                </div>
                <div className='flex gap-3 w-full'>
                    <div className='flex-1'>
                        <InputField {...employeeFormVals.info(t).name} />

                    </div>
                    <div className='flex-1'>
                        <InputField {...employeeFormVals.info(t).jobDesc} />

                    </div>

                </div>
                <div className='flex gap-3 w-full'>
                    <div className='flex-1'>
                        <InputField {...employeeFormVals.info(t).employeeNum} />

                    </div>
                    <div className='flex-1'>
                        <InputField {...employeeFormVals.info(t).hours} />

                    </div>

                </div>
                <EmployeeMultiSelect selected={selected} setSelected={setSelected as any} />
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

export default ServiceModal
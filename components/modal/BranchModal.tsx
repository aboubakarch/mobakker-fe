import React, { FC, useEffect, useMemo, useState } from 'react'
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
import { IBranchFormValues, IFormValueObj } from '@/@types/forms'
import { TFunction } from 'i18next'
import { useFormContext } from 'react-hook-form'
import APIService from '@/services/api'
import { useToast } from '@/hooks/use-toast'
import BranchManagerModal from './BranchManagerModal'
import { RoleType } from '@/constants/enums'
import { convertToFormData } from '@/lib/helpers'
// import { getCookie } from '@/lib/helpers'



// const CityPicker: FC<{
//     branchFormVal: IFormValueObj<IBranchFormValues>, states: any[], t: TFunction<"translation", undefined>
// }> = ({ branchFormVal, states, t }) => {

//     const [cities, setCites] = useState<any[]>([])
//     const form = useFormContext()
//     const state = form.watch("state")
//     // console.log("state changed", state)
//     useEffect(() => {
//         const tcities = City.getCitiesOfState("SA", state)
//         console.log(tcities)
//         setCites(tcities.map(st => ({ name: st.name, value: st.name })))
//     }, [state])

//     return (
//         <div className='flex gap-3 w-full'>
//             <div className='flex-1'>
//                 <InputField {...branchFormVal.info(t).state} data={states} />

//             </div>
//             <div className='flex-1'>
//                 <InputField {...branchFormVal.info(t).city} data={cities} disabled={cities.length === 0} />
//             </div>

//         </div>
//     )
// }

const ManagerPicker: FC<{
    branchFormVal: IFormValueObj<IBranchFormValues>, t: TFunction<"translation", undefined>, manager: null | SampleBranchManager, children?: React.ReactNode
}> = ({ branchFormVal, t, manager, children }) => {

    const [managers, setManagers] = useState<any[] | null>([])

    const form = useFormContext()
    // console.log("state changed", state)
    const fetchData = async () => {

        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getServiceBranchManager(params)

            const data = response?.items?.map((item: any) => ({
                name: `${item?.user?.firstName} ${item?.user?.lastName}`,
                value: item?.id
            }))
            setManagers(data)
            if (manager) {
                form.setValue("manager", manager.id, {
                    shouldValidate: true,
                    shouldDirty: true
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [manager])





    return (
        <div className='flex gap-3 w-full'>

            <div className='flex-1'>
                <InputField {...branchFormVal.info(t).manager as any} data={managers ? managers as any : undefined} />

            </div>
            <div className='flex-1 flex items-end'>
                {children}
            </div>

        </div>
    )
}


const BranchModal: FC<IModalCompProps<SampleBranch>> = ({ closeModal, visible, val, onUpdate, onSubmitData }) => {
    const { t } = useTranslation();
    const branchFormVal = branchFormVals(val)
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()
    const [newManager, setNewManager] = useState<null | SampleBranchManager>(null)
    const [managerModal, setManagerModal] = useState(false)
    const [image, setImage] = useState<File | null>(null);
    const [cities, setCites] = useState<any[]>([])


    // console.log("states", states)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {

        try {
            const params = {
            }
            const response = await APIService.getInstance().getCities(params)

            const data = response?.map((item: any) => ({
                name: item?.name,
                value: item?.id
            }))
            setCites(data)
        } catch (error) {
            console.log(error)
        }
    }


    const createNewBranch = async (values: yup.InferType<typeof branchValidationSchema>) => {
        const cityName = cities.filter(city => city.value === values.city)
        // const userId = getCookie("userId");
        const branch = {
            name: values.name,
            address: values.location,
            city: cityName.length > 0 ? cityName[0].name || values.city : values.city,
            cover: "cover",
            // ownerId: userId,
            // ownerId: "9ed6eeca-1659-4667-a2a0-2f68d3ad92d6",
            country: "Saudi Arab",
            managerId: values.manager || undefined,
            avatar: image ? image : undefined,
            branchCityId: values.city
        }

        const formDate = convertToFormData(branch)
        const br = await APIService.getInstance().createBranch(formDate as any);
        setLoading(false)

        if (onSubmitData) {
            onSubmitData(br as any)
        } // location.reload()

        toast({
            description: "Branch added!",
            variant: "success"
        })
        return true

    }
    const editBranch = async (values: yup.InferType<typeof branchValidationSchema>) => {
        const cityName = cities.filter(city => city.value === values.city)

        const branch = {
            name: values.name,
            address: values.location,
            city: cityName.length > 0 ? cityName[0].name || values.city : values.city,
            country: "Saudi Arab",
            managerId: values.manager || undefined,
            branchCityId: values.city
        }
        await APIService.getInstance().editBranch(val?.id as string, branch as any);
        setLoading(false)

        toast({
            description: "Branch Updated!",
            variant: "success"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof branchValidationSchema>) => {
        setLoading(true)
        let temp = false;
        try {
            if (val) {
                await editBranch(values)
            }
            else {
                temp = await createNewBranch(values)


            }

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
        if (!onSubmitData || !temp) {

            closeModal()
        }
    };


    const handleNewManager = (data: any) => {
        setNewManager(data)

    }

    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <BranchManagerModal visible={managerModal} closeModal={() => setManagerModal(false)} onSubmitData={handleNewManager} />

            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...branchFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{val ? t(messages.EDIT) : t(messages.ADD_BRANCH)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                {!val && <div>

                    <Dropzone title='Upload Logo' onFileSelect={(file) => setImage(file)} />
                </div>}

                <InputField {...branchFormVal.info(t).name} />

                <InputField {...branchFormVal.info(t).location} />
                {/* <CityPicker branchFormVal={branchFormVal} states={states} t={t} /> */}
                <InputField {...branchFormVal.info(t).city} data={cities} disabled={cities.length === 0} />

                <ManagerPicker branchFormVal={branchFormVal} manager={newManager} t={t}>
                    <Button type='button' onClick={() => setManagerModal(true)} className='bg-indigo-800 hover:bg-indigo-600'>{t(messages.ADD_MANAGER)}</Button>

                </ManagerPicker>
                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={val ? t(messages.EDIT) : t(messages.ADD_BRANCH)} className="self-end bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>



            </AppForm>
        </Modal>
    )
}

export default BranchModal
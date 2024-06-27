"use client"
import React, { FC, useEffect, useState } from 'react'
import Modal from './Modal'
import AppForm from '../form/Form'
import { useTranslation } from 'react-i18next'
import { appointmentValidationSchema } from '@/constants/validationSchemas'
import * as yup from 'yup';
import { appointmentFormVals } from '@/constants/forms'
import InputField from '../form/FormField'
import SubmitButton from '../buttons/SubmitButton'
import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalCompProps } from '@/@types/modals'
import { Button } from '../ui'
import { useToast } from '@/hooks/use-toast'
import APIService from '@/services/api'
import { IAppointmentFormValues, IFormValueObj } from '@/@types/forms'
import { useFormContext } from 'react-hook-form'
import { TFunction } from 'i18next'


const repeatOptions = [
    { name: "Daily", value: "DAILY" },
    { name: "Weekly", value: "WEEKLY" },
    { name: "Monthly", value: "MONTHLY" },
    { name: "Yearly", value: "YEARLY" },
    { name: "Never", value: "NONE" },

];

const paymentStatusOptions = [
    { name: "Pending", value: "PENDING" },
    { name: "Paid", value: "PAID" },
    { name: "Approved", value: "APPROVED" }
];

const paymentTypeOptions = [
    { name: "Cash", value: "CASH" },
    { name: "Card", value: "CARD" },
    { name: "Transfer", value: "TRANSFER" }
];

// const statusOptions = [
//     { name: "Pending", value: "PENDING" },
//     { name: "Started", value: "STARTED" },
//     { name: "Completed", value: "COMPLETED" },
//     { name: "Canceled", value: "CANCELED" },
//     { name: "Rejected", value: "REJECTED" }
// ];


const AppointmentForm: FC<{
    appointmentFormVal: IFormValueObj<IAppointmentFormValues>, t: TFunction<"translation", undefined>, services: any[] | null, branches: any[] | null, employees: any[] | null, customers: any[] | null,
    fetchEmployeesData: (branchId: string) => Promise<void>, servMap: any | null
}> = ({ appointmentFormVal, t, services, branches, customers, employees, fetchEmployeesData, servMap }) => {
    const form = useFormContext()
    const service = form.watch("service")
    const branchId = form.watch("branchId")
    const [hours, setHours] = useState<string[] | undefined>(undefined)

    useEffect(() => {
        if (branchId && branchId !== "") {
            fetchEmployeesData(branchId)

        }
    }, [branchId])

    useEffect(() => {
        if (service !== "") {
            const ser = servMap[service]
            if (ser) {
                setHours(ser.availablity.split(","))

            } else {
                setHours(undefined)

            }
        }
        else {
            setHours(undefined)
        }

    }, [service])

    return (
        <div className='flex flex-col gap-4'>
            <div className=' grid grid-cols-2 gap-2 w-full'>
                <InputField {...appointmentFormVal.info(t).branchId} data={branches ? branches : undefined} />
                <InputField {...appointmentFormVal.info(t).employeeId} disabled={branchId === "" || employees === null} data={employees as any} />

            </div>
            <div className='grid grid-cols-2 gap-2 w-full'>
                <InputField {...appointmentFormVal.info(t).bookedBy} data={customers as any} disabled={customers === null} />

                <InputField data={services as any} disabled={!services} {...appointmentFormVal.info(t).service} />
            </div>
            <div className='grid grid-cols-2 gap-2 w-full'>
                <InputField {...appointmentFormVal.info(t).bookingDate} disabled={service === ""} />

                <InputField data={repeatOptions} {...appointmentFormVal.info(t).repeat} />

            </div>
            <div>
                <InputField {...appointmentFormVal.info(t).bookingSlot} disabled={service === "" || !hours} times={hours} />

            </div>


            <div className='flex gap-2'>
                <InputField {...appointmentFormVal.info(t).grossTotalAmount} disabled />
                <InputField {...appointmentFormVal.info(t).discount} disabled />
                <InputField {...appointmentFormVal.info(t).netTotalAmount} disabled />

            </div>
            <div className='grid grid-cols-2 gap-2 w-full'>
                <InputField data={paymentTypeOptions} {...appointmentFormVal.info(t).paymentType} />
                <InputField data={paymentStatusOptions} {...appointmentFormVal.info(t).paymentStatus} disabled={service === ""} />

            </div>

        </div>
    )
}

const AppointmentModal: FC<IModalCompProps<SampleAppointments>> = ({ closeModal, visible, val, onUpdate }) => {
    const { t } = useTranslation();
    const { toast } = useToast()
    const appointmentFormVal = appointmentFormVals(val)
    const [loading, setLoading] = useState(false)
    const [services, setServices] = useState<any[] | null>([])
    const [branches, setBranches] = useState<any[] | null>([])
    const [employees, setEmployees] = useState<any[] | null>([])
    const [customers, setCustomers] = useState<any[] | null>([])
    const [serviceMap, setServiceMap] = useState<any | null>(null)


    const fetchServicesData = async () => {
        setLoading(true)
        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getServices(params)
            const servMap: any = {}
            const data = response?.items?.map((item: ServiceType) => {
                const i = {
                    name: item.name,
                    value: item.id
                }
                servMap[item.id] = item;
                return i
            })
            setServices(data)
            setServiceMap(servMap)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }
    const fetchBranchesData = async () => {
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
            setBranches(data)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }
    const fetchCustomersData = async () => {
        setLoading(true)
        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getCustomers(params)

            const data = response?.items?.map((item: any) => ({
                name: `${item?.user?.firstName || ""} ${item?.user?.lastName || ""}`,
                value: item.id
            }))
            setCustomers(data)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }
    const fetchEmployeesData = async (branchId: string) => {
        setLoading(true)
        try {
            const params = {
                page: 1, take: 100, branchId
            }
            const response = await APIService.getInstance().getEmployees(params)

            const data = response?.items?.map((item: any) => ({
                name: `${item?.user?.firstName || ""} ${item?.user?.lastName || ""}`,
                value: item.id
            }))
            setEmployees(data)
        } catch (error) {
            toast({
                variant: "destructive",
                description: "Error! Something went wrong",
            })
        }
        setLoading(false)
    }


    useEffect(() => {
        fetchServicesData()
        fetchBranchesData()
        fetchCustomersData()
        // fetchBranchData()
    }, [])

    const createNewAppointment = async (values: yup.InferType<typeof appointmentValidationSchema>) => {
        // const userId = getCookie("userId");

        await APIService.getInstance().createAppointment(values as any);
        setLoading(false)

        toast({
            description: "Appointment added!",
            variant: "success"
        })

    }
    const editAppointment = async (values: yup.InferType<typeof appointmentValidationSchema>) => {


        await APIService.getInstance().editAppointment(val?.id as string, values as any);
        setLoading(false)

        toast({
            description: "Appointment Updated!",
            variant: "success"
        })

    }


    const onSubmit = async (values: yup.InferType<typeof appointmentValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            if (val) {
                await editAppointment(values)
            }
            else {
                await createNewAppointment(values)
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
                {...appointmentFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_APPOINTMENT)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>                </div>

                <AppointmentForm appointmentFormVal={appointmentFormVal}
                    services={services} t={t} branches={branches} employees={employees} fetchEmployeesData={fetchEmployeesData}
                    customers={customers}
                    servMap={serviceMap}
                />

                <div className='self-end flex gap-3'>
                    <SubmitButton loading={loading} title={t(messages.SAVE)} className=" bg-primaryBlue" />
                    <Button onClick={closeModal} variant={"outline"} >
                        {t(messages.CANCEL)}
                    </Button>

                </div>

            </AppForm>
        </Modal>
    )
}

export default AppointmentModal
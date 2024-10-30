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
import { FieldValues, useFormContext, UseFormReturn } from 'react-hook-form'
import { TFunction } from 'i18next'
import { getCookie, isDateBetween } from '@/lib/helpers'
import { RoleType } from '@/constants/enums'


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
    // { name: "Transfer", value: "TRANSFER" }
];

// const statusOptions = [
//     { name: "Pending", value: "PENDING" },
//     { name: "Started", value: "STARTED" },
//     { name: "Completed", value: "COMPLETED" },
//     { name: "Canceled", value: "CANCELED" },
//     { name: "Rejected", value: "REJECTED" }
// ];


const AppointmentForm: FC<{
    appointmentFormVal: IFormValueObj<IAppointmentFormValues>, t: TFunction<"translation", undefined>, branches: any[] | null, employees: any[] | null, customers: any[] | null,
    fetchEmployeesData: (branchId: string, form: any) => Promise<void>, branchMap: any | null
}> = ({ appointmentFormVal, t, branches, customers, employees, fetchEmployeesData, branchMap }) => {
    const form = useFormContext()
    const service = form.watch("serviceId")
    const branchId = form.watch("branchId")
    const bookingDate = form.watch("bookingDate")
    const promotion = form.watch("promotion")
    const [hours, setHours] = useState<string[] | undefined>(undefined)
    const [services, setServices] = useState<any[] | null>(null)
    const [promotions, setPromotions] = useState<any[] | null>(null)
    const [serviceMap, setServiceMap] = useState<any | null>(null)
    const [promotionsMap, setPromotionsMap] = useState<any | null>(null)


    const role = getCookie("role")
    let user: any = getCookie("user")
    user = JSON.parse(user || "null");

    useEffect(() => {
        if (user && (role === RoleType.BRANCH_MANAGER || role === RoleType.CUSTOMER_CARE)) {
            console.log(branches)
            console.log(user?.employee?.branchId ? user?.employee?.branchId : branches && branches.length > 0 ? branches[0].value : undefined)
            form.setValue("branchId", user?.employee?.branchId ? user?.employee?.branchId : branches && branches.length > 0 ? branches[0].value : undefined, {
                shouldValidate: true,
                shouldDirty: true
            })
        }

    }, [branches])

    useEffect(() => {
        if (branchId && branchId !== "") {
            const selectedBranch = branchMap ? branchMap[branchId] : null
            if (selectedBranch) {
                const serMap: any = {}
                const tempServ = selectedBranch.services.map((item: SampleServices) => {
                    const i = {
                        name: item.name,
                        value: item.id
                    }
                    serMap[item.id] = item;
                    return i
                })
                setServiceMap(serMap)
                setServices(tempServ)
                if (form && (tempServ.length === 0 || !tempServ)) {
                    form.setError("serviceId", { message: "This Branch has no service please assign first" })
                }
            }

            fetchEmployeesData(branchId, form)


        }
    }, [branchId])

    useEffect(() => {
        if (bookingDate && service !== "" && serviceMap) {
            const ser = serviceMap[service]
            if (ser) {
                if (ser?.promotions && ser?.promotions?.length > 0) {

                    const serMap: any = {}
                    const tempServ = ser?.promotions.map((item: SamplePromotions) => {
                        if (item.discount && item.isActive && isDateBetween(bookingDate, new Date(item.startDate), new Date(item.endDate))) {
                            const i = {
                                name: item.promoCode,
                                value: item.id
                            }
                            serMap[item.id] = item;
                            return i

                        }
                        return undefined
                    }).filter((i: any) => i)
                    setPromotionsMap(serMap)
                    setPromotions(tempServ.length > 0 ? tempServ : null)

                }
            }
        }

    }, [bookingDate, service])

    useEffect(() => {
        if (promotion !== "" && promotionsMap && serviceMap) {
            const ser = serviceMap[service]
            const promo = promotionsMap[promotion];
            if (promo && ser) {
                const disc = +promo?.discount
                const discountedTotal = promo.type === "FIXED" ? ser.price - (disc) : ser.price - (ser.price * (disc / 100))
                form.setValue("discount", promo.type === "FIXED" ? (disc) : (ser.price * (disc / 100)))
                form.setValue("netTotalAmount", discountedTotal < 0 ? 0 : discountedTotal)

            }
        }

    }, [promotion, serviceMap, promotionsMap])

    useEffect(() => {
        if (service !== "" && serviceMap) {
            const ser = serviceMap[service]
            if (ser) {
                setHours(ser.availablity.split(","))
                form.setValue("grossTotalAmount", ser.price)
                form.setValue("netTotalAmount", ser.price)

            } else {
                setHours(undefined)

            }
        }
        else {
            setHours(undefined)
        }

    }, [service, serviceMap])

    return (
        <div className='flex flex-col gap-4'>
            <div className=' grid grid-cols-2 gap-2 w-full'>
                {!(role === RoleType.BRANCH_MANAGER || role === RoleType.CUSTOMER_CARE) && <InputField {...appointmentFormVal.info(t).branchId} data={branches ? branches : undefined} />}
                <InputField {...appointmentFormVal.info(t).employeeId} disabled={branchId === "" || employees === null} data={employees as any} />

            </div>
            <div className='grid grid-cols-2 gap-2 w-full'>
                <InputField {...appointmentFormVal.info(t).bookedBy} data={customers as any} disabled={customers === null} />

                <InputField data={services as any} disabled={services === null || branchId === ""} {...appointmentFormVal.info(t).serviceId} />
            </div>
            <div className='grid grid-cols-2 gap-2 w-full'>
                <InputField {...appointmentFormVal.info(t).bookingDate} disabled={service === ""} />
                {promotions && <InputField {...appointmentFormVal.info(t).promotion} disabled={service === ""} data={promotions} />}

                <InputField data={repeatOptions} {...appointmentFormVal.info(t).repeat} />

            </div>
            <div>
                <InputField {...appointmentFormVal.info(t).bookingSlot} disabled={service === "" || !hours} times={hours} />

            </div>


            <div className='flex gap-2'>
                {/* <InputField {...appointmentFormVal.info(t).discount} disabled /> */}
                <InputField {...appointmentFormVal.info(t).netTotalAmount} disabled />
                {/* <InputField {...appointmentFormVal.info(t).grossTotalAmount} disabled /> */}

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
    // const [services, setServices] = useState<any[] | null>([])
    const [branches, setBranches] = useState<any[] | null>([])
    const [employees, setEmployees] = useState<any[] | null>([])
    const [customers, setCustomers] = useState<any[] | null>([])
    // const [serviceMap, setServiceMap] = useState<any | null>(null)
    const [branchMap, setBranchMap] = useState<any | null>(null)
    const role = getCookie("role")


    // const fetchServicesData = async () => {
    //     setLoading(true)
    //     try {
    //         const params = {
    //             page: 1, take: 100
    //         }
    //         const response = await APIService.getInstance().getServices(params)
    //         const servMap: any = {}
    //         const data = response?.items?.map((item: ServiceType) => {
    //             const i = {
    //                 name: item.name,
    //                 value: item.id
    //             }
    //             servMap[item.id] = item;
    //             return i
    //         })
    //         setServices(data)
    //         setServiceMap(servMap)
    //     } catch (error: any) {
    //         toast({
    //             variant: "destructive",
    //             description: error?.response?.data?.message || "Error! Something went wrong",
    //         })
    //     }
    //     setLoading(false)
    // }
    const fetchBranchesData = async () => {
        setLoading(true)
        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getBranches(params)
            const brMap: any = {}
            const data = response?.items?.map((item: ServiceType) => {
                brMap[item.id] = item;

                return {
                    name: item.name,
                    value: item.id
                }
            })
            setBranchMap(brMap)
            setBranches(data)
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error?.response?.data?.message || "Error! Something went wrong",
            })
        }
        setLoading(false)
    }
    const fetchEmployeeBranchData = async () => {
        setLoading(true)
        try {

            const response = await APIService.getInstance().getEmployeeBranch()
            // console.log(response)
            if (response && response?.id) {
                const brMap: any = { [response.id]: response }
                setBranchMap(brMap)

                setBranches([{ name: response?.name, value: response.id }])
            }

        } catch (error: any) {
            console.log(error)
            // toast({
            //     variant: "destructive",
            //     description: error?.response?.data?.message || "Error! Something went wrong",
            // })
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
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error?.response?.data?.message || "Error! Something went wrong",
            })
        }
        setLoading(false)
    }
    const fetchEmployeesData = async (branchId: string, form?: UseFormReturn<FieldValues, any, undefined>) => {
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
            if (form && (data?.length === 0 || !data)) {
                form.setError("branchId", { message: "This Branch has no employees" })
            }
            setEmployees(data)
        } catch (error: any) {
            toast({
                variant: "destructive",
                description: error?.response?.data?.message || "Error! Something went wrong",
            })
        }
        setLoading(false)
    }


    useEffect(() => {
        // fetchServicesData()
        if ((role === RoleType.BRANCH_MANAGER || role === RoleType.CUSTOMER_CARE)) {
            fetchEmployeeBranchData()
        }
        else {

            fetchBranchesData()
        }

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
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-3 py-4 flex gap-4 flex-col"
                {...appointmentFormVal}>
                <div className='flex justify-between w-full'>
                    <p className='text-black dark:text-white text-xl font-medium  leading-[30px]'>{t(messages.ADD_NEW_APPOINTMENT)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>                </div>

                <AppointmentForm appointmentFormVal={appointmentFormVal}
                    t={t} branches={branches} employees={employees} fetchEmployeesData={fetchEmployeesData}
                    customers={customers} branchMap={branchMap}
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
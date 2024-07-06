import React, { FC, useEffect, useMemo, useState } from 'react'
import BaseFilter from './BaseFilter'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'
import { Slider } from '@/components/ui/Slider'

const AppointmentFilters: FC<IFilterProps<IAppointmentFilters>> = ({ onApply, onReset }) => {
    const [customers, setCustomers] = useState<any[] | null>([])
    const [branches, setBranches] = useState<any[] | null>([])
    const [customer, setCustomer] = useState("")
    const [branch, setBranch] = useState("")


    const fetchCustomersData = async () => {
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

        }
    }
    const fetchBranch = async () => {

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
        } catch (error: any) {

        }
    }



    useEffect(() => {
        fetchCustomersData()
        fetchBranch()
    }, [])

    const handleApply = () => {
        console.log("Applying")
        if (onApply) {
            const filters = {
                branch: branch !== "" ? branch : undefined, customer: customer !== "" ? customer : undefined,
            }
            onApply(filters)
        }
    }

    const handleReset = () => {
        setBranch("")
        setCustomer("")
        if (onReset) {

            onReset()
        }
    }

    return (
        <BaseFilter onApply={handleApply} onReset={handleReset}>

            <div className='my-6 flex flex-col gap-6'>
                <div>
                    <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'>Branch</p>
                    <SingleSearchSelect label={"Branch"} data={branches as any} selected={branch} setSelected={(item: string) => setBranch(item) as any} />

                </div>


                <div>
                    <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'>Category</p>
                    <SingleSearchSelect label={"Customer"} data={customers as any} selected={customer} setSelected={(item: string) => setCustomer(item) as any} />
                </div>


            </div>

        </BaseFilter>
    )
}

export default AppointmentFilters
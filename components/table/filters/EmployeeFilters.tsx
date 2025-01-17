import React, { FC, useEffect, useMemo, useState } from 'react'
import BaseFilter from './BaseFilter'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'
import { Slider } from '@/components/ui/Slider'
import { getCookie } from '@/lib/helpers'
import { RoleType } from '@/constants/enums'

const EmployeeFilters: FC<IFilterProps<IEmployeeFilters>> = ({ onApply, onReset }) => {
    const [branches, setBranches] = useState<any[] | null>([])
    const [branch, setBranch] = useState("")
    const [serviceProviders, setServiceProviders] = useState<any[] | null>([])
    const [serviceProvider, setServiceProvider] = useState("")
    const role = getCookie("role")
    const [loading, setLoading] = useState(false)

    const fetchServiceProvidersData = async () => {
        try {
            const params = {
                page: 1, take: 100
            }
            const response = await APIService.getInstance().getServiceProvider(params)

            const data = response?.items?.map((item: any) => ({
                name: `${item?.user?.firstName || ""} ${item?.user?.lastName || ""}`,
                value: item.id
            }))
            setServiceProviders(data)
        } catch (error: any) {
            // Handle error if necessary
        }
    }
    const fetchBranch = async () => {
        setLoading(true)

        try {
            const params = {
                page: 1, take: 100, ownerId: serviceProvider === "" ? undefined : serviceProvider
            }
            const response = await APIService.getInstance().getBranches(params)

            const data = response?.items?.map((item: ServiceType) => ({
                name: item.name,
                value: item.id
            }))
            setBranches(data)
            setLoading(false)
        } catch (error: any) {

        }
    }

    useEffect(() => {
        fetchBranch()

    }, [serviceProvider])

    useEffect(() => {
        if (role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) {

            fetchServiceProvidersData()
        }

    }, [])

    const handleApply = () => {
        console.log("Applying")
        if (onApply) {
            const filters = {
                branchId: branch !== "" ? branch : undefined, serviseProviderId: serviceProvider !== "" ? serviceProvider : undefined
            }
            onApply(filters)
        }
    }

    const handleReset = () => {
        setBranch("")
        setServiceProvider("")
        if (onReset) {

            onReset()
        }
    }

    return (
        <BaseFilter onApply={handleApply} onReset={handleReset}>

            <div className='my-6 flex flex-col gap-6'>
                {(role === RoleType.ADMIN || role === RoleType.SUPER_ADMIN) && <div>
                    <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'>Service Provider</p>
                    <SingleSearchSelect label={"Service Provider"} data={serviceProviders as any} selected={serviceProvider} setSelected={(item: string) => { setServiceProvider(item); setBranch("") }} />
                </div>}
                <div>
                    <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'>Branch</p>
                    <SingleSearchSelect disabled={loading} label={"Branch"} data={branches as any} selected={branch} setSelected={(item: string) => setBranch(item) as any} />

                </div>

            </div>

        </BaseFilter>
    )
}

export default EmployeeFilters
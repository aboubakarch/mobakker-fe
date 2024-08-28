import React, { FC, useEffect, useMemo, useState } from 'react'
import BaseFilter from './BaseFilter'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'
import { Slider } from '@/components/ui/Slider'

const EmployeeFilters: FC<IFilterProps<IEmployeeFilters>> = ({ onApply, onReset }) => {
    const [branches, setBranches] = useState<any[] | null>([])
    const [branch, setBranch] = useState("")


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
        fetchBranch()
    }, [])

    const handleApply = () => {
        console.log("Applying")
        if (onApply) {
            const filters = {
                branchId: branch !== "" ? branch : undefined
            }
            onApply(filters)
        }
    }

    const handleReset = () => {
        setBranch("")
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

            </div>

        </BaseFilter>
    )
}

export default EmployeeFilters
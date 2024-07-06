import React, { FC, useEffect, useMemo, useState } from 'react'
import BaseFilter from './BaseFilter'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'
import { Slider } from '@/components/ui/Slider'

const ServiceFilters: FC<IFilterProps<IServiceFilters>> = ({ onApply, onReset }) => {
    const [serviceTypes, setServiceTypes] = useState<any[] | null>([])
    const [branches, setBranches] = useState<any[] | null>([])
    const [serviceType, setServiceType] = useState("")
    const [branch, setBranch] = useState("")
    const [range, setRange] = useState([0, 100000])


    const fetchData = async () => {

        try {
            const params = {
                page: 1, take: 30
            }
            const response = await APIService.getInstance().getServiceType(params)

            const data = response?.items?.map((item: ServiceType) => ({
                name: item.name,
                value: item.id
            }))
            setServiceTypes(data)
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
        fetchData()
        fetchBranch()
    }, [])

    const handleApply = () => {
        console.log("Applying")
        if (onApply) {
            const filters = {
                branch: branch !== "" ? branch : undefined, category: serviceType !== "" ? serviceType : undefined,
                minPrice: range[0] !== 0 ? range[0] : undefined, maxPrice: range[1] !== 100_000 ? range[1] : undefined
            }
            onApply(filters)
        }
    }

    const handleReset = () => {
        setBranch("")
        setServiceType("")
        setRange([0, 100000])
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
                    <p className='text-sm text-black mb-2'>Price Range</p>
                    <Slider
                        minStepsBetweenThumbs={1000}
                        min={0}
                        max={100000}
                        step={10}
                        onValueChange={(vals: any) => setRange(vals)}
                        className={"w-full"} />

                </div>


                <div>
                    <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'>Category</p>
                    <SingleSearchSelect label={"Category"} data={serviceTypes as any} selected={serviceType} setSelected={(item: string) => setServiceType(item) as any} />
                </div>


            </div>

        </BaseFilter>
    )
}

export default ServiceFilters
import React, { FC, useEffect, useMemo, useState } from 'react'
import BaseFilter from './BaseFilter'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'

const BranchFilters: FC<IFilterProps<IBranchFilters>> = ({ onApply, onReset }) => {
    const [cities, setCites] = useState<any[]>([])
    const [city, setCity] = useState("")
    const [manager, setManager] = useState("")
    const [managers, setManagers] = useState("")


    const fetchDataCities = async () => {

        try {
            const params = {
            }
            const response = await APIService.getInstance().getCities(params)

            const data = response?.map((item: any) => ({
                name: item?.name,
                // value: item?.id
                value: item?.name
            }))
            setCites(data)
        } catch (error) {
            console.log(error)
        }
    }

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


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        fetchDataCities()
    }, [])

    const handleApply = () => {
        console.log("Applying")
        if (onApply) {

            onApply({ managerId: manager !== "" ? manager : undefined, city: city !== "" ? city : undefined })
        }
    }

    const handleReset = () => {
        setManager("")
        setCity("")
        if (onReset) {

            onReset()
        }
    }

    return (
        <BaseFilter onApply={handleApply} onReset={handleReset}>

            <div className='my-6 flex flex-col gap-6'>


                <div>
                    <p className='text-sm text-black dark:text-white mb-2'>City</p>
                    <SingleSearchSelect label={"City"}
                        data={cities as any} selected={city}
                        setSelected={(item: string) => setCity(item) as any}
                    />
                </div>
                <div>
                    <p className='text-sm text-black dark:text-white mb-2'>Manager</p>
                    <SingleSearchSelect label={"Manager"} data={managers as any} selected={manager} setSelected={(item: string) => setManager(item) as any} />
                </div>


            </div>

        </BaseFilter>
    )
}

export default BranchFilters
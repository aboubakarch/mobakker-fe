import React, { FC, useEffect, useMemo, useState } from 'react'
import BaseFilter from './BaseFilter'
import { City, State } from 'country-state-city'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'

const BranchFilters: FC<IFilterProps<IBranchFilters>> = ({ onApply, onReset }) => {
    const [cities, setCites] = useState<any[]>([])
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [manager, setManager] = useState("")
    const [managers, setManagers] = useState("")
    const states = useMemo(() => {
        const temp = State.getStatesOfCountry("SA")
        return temp.map(st => ({ name: st.name, value: st.isoCode }))
    }, [])

    useEffect(() => {
        const tcities = City.getCitiesOfState("SA", state)
        setCity("")
        setCites(tcities.map(st => ({ name: st.name, value: st.name })))
    }, [state])

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
                    <p className='text-sm text-black mb-2'>State</p>
                    <SingleSearchSelect label={"States"} data={states as any} selected={state} setSelected={(item: string) => setState(item) as any} />

                </div>

                {cities.length !== 0 && <div>
                    <p className='text-sm text-black mb-2'>City</p>
                    <SingleSearchSelect label={"City"}
                        data={cities as any} selected={city}
                        setSelected={(item: string) => setCity(item) as any}
                    />
                </div>}
                <div>
                    <p className='text-sm text-black mb-2'>Manager</p>
                    <SingleSearchSelect label={"Manager"} data={managers as any} selected={manager} setSelected={(item: string) => setManager(item) as any} />
                </div>


            </div>

        </BaseFilter>
    )
}

export default BranchFilters
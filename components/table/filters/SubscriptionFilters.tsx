import React, { FC, useEffect, useState } from 'react'
import BaseFilter from './BaseFilter'
import { SingleSearchSelect } from '@/components/form/SingleSearchSelect'
import APIService from '@/services/api'

const statusOpts = [
    { name: "Initialized", value: "INITIALIZED" },
    { name: "Active", value: "ACTIVE" },
    { name: "Paused", value: "PAUSED" },
    { name: "Failed", value: "FAILED" },
    { name: "Stopped", value: "STOPPED" }
]

const SubscriptionFilters: FC<IFilterProps<ISubscriptionFilters>> = ({ onApply, onReset }) => {
    const [serviceProviders, setServiceProviders] = useState<any[] | null>([])
    const [serviceProvider, setServiceProvider] = useState("")
    const [cities, setCites] = useState<any[]>([])
    const [city, setCity] = useState("")
    const [status, setStatus] = useState("")
    const [subscriptions, setSubscriptions] = useState([])
    const [subscriptionId, setSubscriptionId] = useState("")

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
    const fetchSubscriptionDataData = async () => {

        try {
            // const params = {
            //     page: 1, take: 100
            // }
            const response = await APIService.getInstance().getSubscriptions({})
            const data = response?.subscriptions?.map((item: any) => ({
                name: item?.duration,
                // value: item?.id
                value: item?.id
            }))

            setSubscriptions(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchServiceProvidersData()
        fetchSubscriptionDataData()
        fetchDataCities()
    }, [])

    const handleApply = () => {
        if (onApply) {
            const filters = {
                serviceProvider: serviceProvider !== "" ? serviceProvider : undefined,
                city: city !== "" ? city : undefined,
                subscriptionStatus: status !== "" ? status : undefined,
                subscriptionId: subscriptionId !== "" ? subscriptionId : undefined
            }
            onApply(filters)
        }
    }

    const handleReset = () => {
        setServiceProvider("")
        setCity("")
        setStatus("")
        setSubscriptionId("")
        if (onReset) {
            onReset()
        }
    }

    return (
        <BaseFilter onApply={handleApply} onReset={handleReset}>
            <div className='my-6 flex flex-col gap-6'>
                <div>
                    <p className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2'>Service Provider</p>
                    <SingleSearchSelect label={"Service Provider"} data={serviceProviders as any} selected={serviceProvider} setSelected={(item: string) => setServiceProvider(item) as any} />
                </div>
                <div>
                    <p className='text-sm text-black dark:text-white mb-2'>City</p>
                    <SingleSearchSelect label={"City"}
                        data={cities as any} selected={city}
                        setSelected={(item: string) => setCity(item) as any}
                    />
                </div>
                <div>
                    <p className='text-sm text-black dark:text-white mb-2'>Subscription Type</p>
                    <SingleSearchSelect label={"Subscription Type"}
                        data={subscriptions as any} selected={subscriptionId}
                        setSelected={(item: string) => setSubscriptionId(item) as any}
                    />
                </div>
                <div>
                    <p className='text-sm text-black dark:text-white mb-2'>Status</p>
                    <SingleSearchSelect label={"Status"}
                        data={statusOpts as any} selected={status}
                        setSelected={(item: string) => setStatus(item) as any}
                    />
                </div>
            </div>
        </BaseFilter>
    )
}

export default SubscriptionFilters

"use client"
import React from 'react'
import { DataTable } from './DataTable'
import { subscriptionColumns } from './columns/SubscriptionColumns'

const SubscriptionTable = () => {
    const data: SampleSubscription[] = [
        {
            subscriptionId: "548390",
            status: true,
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            type: "Basic",
            dayLeft: 12,
            paid: "Yes",
            renewal: 12
        },
        {
            subscriptionId: "548390",
            status: false,
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            type: "Basic",
            dayLeft: 12,
            paid: "Yes",
            renewal: 12
        },
        {
            subscriptionId: "548390",
            status: false,
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            type: "Basic",
            dayLeft: 12,
            paid: "Yes",
            renewal: 12
        },
        {
            subscriptionId: "548390",
            status: false,
            customerNumber: 5637572384,
            customerName: 'Abdullah Ali Al-Raddadi',
            type: "Basic",
            dayLeft: 12,
            paid: "Yes",
            renewal: 12
        },

    ]

    return (
        <div>
            <DataTable data={data} columns={subscriptionColumns} filterKey='name' count={data.length} rowStyle='odd:bg-white even:bg-indigo-800 even:bg-opacity-5' />
        </div>
    )
}

export default SubscriptionTable
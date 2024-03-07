import AppointmentRatingTable from '@/components/table/AppointmentRatingTable'
import ProviderTable from '@/components/table/ProviderTable'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import React from 'react'

const LoyalProgram = () => {

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader title={messages.RATINGS}
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis asperiores, aperiam ipsum corrupti minus recusandae exercitationem dolorum temporibus esse at officia iure in hic consequatur ea nisi placeat praesentium officiis."
            >
            </PageHeader>
            <Tabs defaultValue="appointment" className="w-full">
                <TabsList>
                    <TabsTrigger
                        value="appointment"
                        className='data-[state=active]:bg-indigo-800 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:border-indigo-800 '>
                        {messages.RATING_APPOINTMENT}
                    </TabsTrigger>
                    <TabsTrigger
                        value="employee"
                        className='data-[state=active]:bg-indigo-800 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:border-indigo-800 '>
                        {messages.RATING_EMPLOYEE}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="appointment">
                    <AppointmentRatingTable />

                </TabsContent>
                <TabsContent value="employee">
                    <ProviderTable />

                </TabsContent>
            </Tabs>
        </div>
    )
}

export default LoyalProgram
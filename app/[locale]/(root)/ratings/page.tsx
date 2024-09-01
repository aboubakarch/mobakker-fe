"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui";
import PageHeader from "@/components/ui/PageHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';
import BranchRatingTable from "@/components/table/BranchRatingTable";
import ServiceRatingTable from "@/components/table/ServiceRatingTable";
import EmployeeRatingTable from "@/components/table/EmployeeRatingTable";
import CustomerRatingTable from "@/components/table/CustomerRatingTable";
import { messages } from "@/constants/constants";

const Ratings = () => {
    const [selectedTab, setSelectedTab] = useState<'service' | 'employee' | 'customer'>('service');
    const [flag, setFlag] = useState(false);

    const handleEdit = (item: any) => {
        // Your edit logic here
    };

    const handleDelete = (item: any) => {
        // Your delete logic here
    };

    const handleRow = (item: any) => {
        // Your row click logic here
    };

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar">
            <PageHeader
                title="Ratings"
                description="Here you can manage Service, Employee, and Customer Ratings"
            >

            </PageHeader>

            <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value as any)} className="w-full">
                <TabsList>
                    <TabsTrigger
                        value="service"
                        className='data-[state=active]:bg-indigo-800 hover:bg-indigo-800 hover:bg-opacity-5 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:rounded-b-none data-[state=active]:border-indigo-800 '>
                        {"Service Rating"}
                    </TabsTrigger>
                    <TabsTrigger
                        value="employee"
                        className='data-[state=active]:bg-indigo-800 hover:bg-indigo-800 hover:bg-opacity-5 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:rounded-b-none data-[state=active]:border-indigo-800 '>
                        {"Employee Rating"}
                    </TabsTrigger>
                    <TabsTrigger
                        value="customer"
                        className='data-[state=active]:bg-indigo-800 hover:bg-indigo-800 hover:bg-opacity-5 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:rounded-b-none data-[state=active]:border-indigo-800 '>
                        {"Customer Rating"}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="service">
                    <ServiceRatingTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
                </TabsContent>
                <TabsContent value="employee">
                    <EmployeeRatingTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
                </TabsContent>
                <TabsContent value="customer">
                    <CustomerRatingTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Ratings;

"use client";
import React, { useState } from "react";
import CountryModal from "@/components/modal/CountryModal";
import StateModal from "@/components/modal/StateModal"; // Import State Modal
import CityModal from "@/components/modal/CityModal"; // Import City Modal
import DeleteModal from "@/components/modal/DeleteModal";
import CountryTable from "@/components/table/CountryTable";
import StateTable from "@/components/table/StateTable"; // Import State Table
import CityTable from "@/components/table/CityTable"; // Import City Table
import { Button } from "@/components/ui";
import PageHeader from "@/components/ui/PageHeader";
import { messages } from "@/constants/constants";
import { useToast } from "@/hooks/use-toast";
import APIService from "@/services/api";
import { useTranslation } from "react-i18next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

const Countries = () => {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [stateModalOpen, setStateModalOpen] = useState(false);
    const [cityModalOpen, setCityModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<undefined | Country>(undefined);
    const [selectedState, setSelectedState] = useState<undefined | State>(undefined);
    const [selectedCity, setSelectedCity] = useState<undefined | City>(undefined);
    const [flag, setFlag] = useState(false);
    const [selectedTab, setSelectedTab] = useState<'countries' | 'states' | 'cities'>('countries');
    const { toast } = useToast();

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedCountry(undefined);
    };

    const handleStateModalClose = () => {
        setStateModalOpen(false);
        setSelectedState(undefined);
    };

    const handleCityModalClose = () => {
        setCityModalOpen(false);
        setSelectedCity(undefined);
    };

    const handleDeleteModalClose = () => {
        setDeleteModalOpen(false);
        setSelectedCountry(undefined);
        setSelectedState(undefined);
        setSelectedCity(undefined);
    };

    const handleEdit = (item: Country | State | City) => {
        if (selectedTab === "countries") {
            setSelectedCountry(item as Country);
            setModalOpen(true);
        } else if (selectedTab === "states") {
            setSelectedState(item as State);
            setStateModalOpen(true);
        } else {
            setSelectedCity(item as City);
            setCityModalOpen(true);
        }
    };

    const handleDelete = (item: Country | State | City) => {
        if (selectedTab === "countries") {
            setSelectedCountry(item as Country);
        } else if (selectedTab === "states") {
            setSelectedState(item as State);
        } else {
            setSelectedCity(item as City);
        }
        setDeleteModalOpen(true);
    };

    const handleRow = (item: Country | State | City) => {
        if (selectedTab === "countries") {
            setSelectedCountry(item as Country);
        } else if (selectedTab === "states") {
            setSelectedState(item as State);
        } else {
            setSelectedCity(item as City);
        }
    };

    const onDeleteItem = async () => {
        try {
            if (selectedTab === "countries" && selectedCountry) {
                await APIService.getInstance().deleteCountry(selectedCountry?.id);
            } else if (selectedTab === "states" && selectedState) {
                await APIService.getInstance().deleteState(selectedState?.id);
            } else if (selectedTab === "cities" && selectedCity) {
                await APIService.getInstance().deleteCity(selectedCity?.id);
            } else {
                throw new Error("No item selected");
            }

            toast({
                variant: "destructive",
                description: `${selectedTab === "countries" ? "Country" : selectedTab === "states" ? "State" : "City"} Deleted!`,
            });
            setFlag(!flag);
        } catch (error) {
            toast({
                variant: "destructive",
                description: `Error deleting ${selectedTab === "countries" ? "Country" : selectedTab === "states" ? "State" : "City"}!`,
            });
        }
        handleDeleteModalClose();
    };

    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <CountryModal visible={modalOpen} closeModal={handleModalClose} val={selectedCountry} onUpdate={() => setFlag(!flag)} />
            <StateModal visible={stateModalOpen} closeModal={handleStateModalClose} val={selectedState} onUpdate={() => setFlag(!flag)} />
            <CityModal visible={cityModalOpen} closeModal={handleCityModalClose} val={selectedCity} onUpdate={() => setFlag(!flag)} />

            <DeleteModal
                visible={deleteModalOpen}
                closeModal={handleDeleteModalClose}
                onDelete={onDeleteItem}
                title={t(selectedTab === "countries" ? messages.COUNTRIES : selectedTab === "states" ? messages.STATES : messages.CITIES)}
            />
            <PageHeader title={t(messages.LOCATION)}
                description={t("Here You can add, update, or delete countries, states, and cities")}
            >
                <Button onClick={() => {
                    if (selectedTab === "countries") setModalOpen(true);
                    else if (selectedTab === "states") setStateModalOpen(true);
                    else setCityModalOpen(true);
                }} className="bg-indigo-800 hover:bg-indigo-600">
                    {t(selectedTab === "countries" ? messages.ADD_COUNTRY : selectedTab === "states" ? messages.ADD_STATE : messages.ADD_CITY)}
                </Button>
            </PageHeader>
            <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value as any)} className="w-full" >
                <TabsList>
                    <TabsTrigger
                        value="countries"
                        className='data-[state=active]:bg-indigo-800 hover:bg-indigo-800 hover:bg-opacity-5 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:rounded-b-none data-[state=active]:border-indigo-800 '>
                        {t(messages.COUNTRIES)}
                    </TabsTrigger>
                    <TabsTrigger
                        value="states"
                        className='data-[state=active]:bg-indigo-800 hover:bg-indigo-800 hover:bg-opacity-5 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:rounded-b-none data-[state=active]:border-indigo-800 '>
                        {t(messages.STATES)}
                    </TabsTrigger>
                    <TabsTrigger
                        value="cities"
                        className='data-[state=active]:bg-indigo-800 hover:bg-indigo-800 hover:bg-opacity-5 data-[state=active]:bg-opacity-10 data-[state=active]:border-b-2 data-[state=active]:rounded-b-none data-[state=active]:border-indigo-800 '>
                        {t(messages.CITIES)}
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="countries">
                    <CountryTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
                </TabsContent>
                <TabsContent value="states">
                    <StateTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
                </TabsContent>
                <TabsContent value="cities">
                    <CityTable handleEdit={handleEdit} handleDelete={handleDelete} onUpdateFlag={flag} handleRow={handleRow} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Countries;

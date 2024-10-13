"use client";
import React, { FC, useEffect, useState } from "react";
import Modal from "./Modal";
import AppForm from "../form/Form";
import { useTranslation } from "react-i18next";
import InputField from "../form/FormField";
import SubmitButton from "../buttons/SubmitButton";
import { X } from "lucide-react";
import { IModalCompProps } from "@/@types/modals";
import { Button } from "../ui";
import { useToast } from "@/hooks/use-toast";
import APIService from "@/services/api";
import { TFunction } from "i18next";
import { useFormContext } from "react-hook-form";
import { stateFormVals } from "@/constants/forms";
import { stateValidationSchema } from "@/constants/validationSchemas";
import { messages } from "@/constants/constants";
import * as yup from 'yup';

const StateModal: FC<IModalCompProps<State>> = ({
    closeModal,
    visible,
    val,
    onUpdate,
}) => {
    const { t } = useTranslation();
    const stateFormVal = stateFormVals(val);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();
    const [countries, setCountries] = useState<null | any>(null)

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        try {
            setLoading(true)
            const data = await APIService.getInstance().getCountries({});
            const res = data.map((d: Country) => ({
                name: d.name,
                value: d.id
            }))
            setCountries(res)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const createNewState = async (values: yup.InferType<typeof stateValidationSchema>) => {
        const state = { ...values };
        await APIService.getInstance().createState(state as any);
        setLoading(false);

        toast({
            description: "State added!",
            variant: "success",
        });
    };

    const editState = async (values: yup.InferType<typeof stateValidationSchema>) => {
        await APIService.getInstance().editState(val?.id as string, values);
        setLoading(false);

        toast({
            description: "State Updated!",
            variant: "success",
        });
    };

    const onSubmit = async (values: yup.InferType<typeof stateValidationSchema>) => {
        setLoading(true);
        try {
            if (val) {
                await editState(values);
            } else {
                await createNewState(values);
            }
            if (onUpdate) {
                onUpdate();
            }
        } catch (error: any) {
            setLoading(false);
            toast({
                variant: "destructive",
                description: error?.response?.data?.message
                    ? JSON.stringify(error?.response?.data?.message)
                    : "Error! Something went wrong",
            });
        }
        closeModal();
    };

    return (
        <Modal visibility={visible} closeModal={closeModal}>
            <AppForm
                onSubmit={onSubmit}
                className="px-5 py-4 flex gap-4 flex-col"
                {...stateFormVal}
            >
                <div className="flex justify-between w-full">
                    <p className="text-black dark:text-white text-xl font-medium  leading-[30px]">
                        {!val ? t(messages.ADD_STATE) : t(messages.UPDATE)}
                    </p>
                    <Button variant={"ghost"} onClick={closeModal} className="px-3 py-0">
                        <X className="w-4 h-4 relative text-black dark:text-white" />
                    </Button>
                </div>

                <div className="flex flex-col gap-4">
                    <InputField {...stateFormVal.info(t).name} />
                    <InputField {...stateFormVal.info(t).code} />
                    <InputField {...stateFormVal.info(t).countryId} data={countries} disabled={!countries} />
                </div>

                <div className="self-end flex gap-3">
                    <SubmitButton
                        loading={loading}
                        title={val ? t(messages.UPDATE) : t(messages.SAVE)}
                        className=" bg-primaryBlue"
                    />
                    <Button onClick={closeModal} variant={"outline"}>
                        {t(messages.CANCEL)}
                    </Button>
                </div>
            </AppForm>
        </Modal>
    );
};

export default StateModal;

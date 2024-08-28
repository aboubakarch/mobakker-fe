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
import { countryFormVals } from "@/constants/forms";
import { countryValidationSchema } from "@/constants/validationSchemas";
import { messages } from "@/constants/constants";
import * as yup from 'yup';
const CountryModal: FC<IModalCompProps<Country>> = ({
    closeModal,
    visible,
    val,
    onUpdate,
}) => {
    const { t } = useTranslation();
    const countryFormVal = countryFormVals(val);
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const createNewCountry = async (values: yup.InferType<typeof countryValidationSchema>) => {
        const country = { ...values };
        await APIService.getInstance().createCountry(country as any);
        setLoading(false);

        toast({
            description: "Country added!",
            variant: "success",
        });
    };

    const editCountry = async (values: yup.InferType<typeof countryValidationSchema>) => {
        await APIService.getInstance().editCountry(val?.id as string, values);
        setLoading(false);

        toast({
            description: "Country Updated!",
            variant: "success",
        });
    };

    const onSubmit = async (values: yup.InferType<typeof countryValidationSchema>) => {
        setLoading(true);
        try {
            if (val) {
                await editCountry(values);
            } else {
                await createNewCountry(values);
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
                {...countryFormVal}
            >
                <div className="flex justify-between w-full">
                    <p className="text-black text-xl font-medium  leading-[30px]">
                        {!val ? t(messages.ADD_COUNTRY) : t(messages.UPDATE)}
                    </p>
                    <Button variant={"ghost"} onClick={closeModal} className="px-3 py-0">
                        <X className="w-4 h-4 relative text-black" />
                    </Button>
                </div>

                <div className="flex flex-col gap-4">
                    <InputField {...countryFormVal.info(t).name} />
                    <InputField {...countryFormVal.info(t).code} />
                    <InputField {...countryFormVal.info(t).mobileCode} />
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

export default CountryModal;

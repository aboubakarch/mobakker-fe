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
import { sendNotificationFormVals } from "@/constants/forms";
import { countryValidationSchema } from "@/constants/validationSchemas";
import { messages } from "@/constants/constants";
import * as yup from 'yup';
const SendNotificationModal: FC<IModalCompProps<{ id: string }>> = ({
    closeModal,
    visible,
    val,
    onUpdate,
}) => {
    const { t } = useTranslation();
    const sendNotificationFormVal = sendNotificationFormVals();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const sendNotification = async (values: yup.InferType<typeof countryValidationSchema>) => {
        const country = { ...values, userId: val?.id };
        await APIService.getInstance().sendNotification(country as any);
        setLoading(false);

        toast({
            description: "Notification sent!",
            variant: "success",
        });
    };


    const onSubmit = async (values: yup.InferType<typeof countryValidationSchema>) => {
        setLoading(true);
        try {

            await sendNotification(values);

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
                {...sendNotificationFormVal}
            >
                <div className="flex justify-between w-full">
                    <p className="text-black dark:text-white text-xl font-medium  leading-[30px]">
                        {t(messages.NOTIFICATION)}
                    </p>
                    <Button variant={"ghost"} onClick={closeModal} className="px-3 py-0">
                        <X className="w-4 h-4 relative text-black dark:text-white" />
                    </Button>
                </div>

                <div className="flex flex-col gap-4">
                    <InputField {...sendNotificationFormVal.info(t).heading} />
                    <InputField {...sendNotificationFormVal.info(t).notification} />
                </div>

                <div className="self-end flex gap-3">
                    <SubmitButton
                        loading={loading}
                        title={t("Send")}
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

export default SendNotificationModal;

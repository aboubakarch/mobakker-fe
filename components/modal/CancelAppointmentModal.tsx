"use client";
import React, { FC, useState } from "react";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import InputField from "../form/FormField";
import SubmitButton from "../buttons/SubmitButton";
import { X } from "lucide-react";
import { IModalCompProps } from "@/@types/modals";
import { Button, Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui";
import { useToast } from "@/hooks/use-toast";
import APIService from "@/services/api";
import { cancelAppointmentValidationSchema, ratingValidationSchema } from "@/constants/validationSchemas";
import { messages } from "@/constants/constants";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "react-simple-star-rating";
import { FieldTypesEnum } from "@/constants/enums";


const CancelAppointmentModal: FC<IModalCompProps<SampleAppointments>> = ({
    closeModal,
    visible,
    val,
    onSubmitData
}) => {
    const { t } = useTranslation();
    const form = useForm<yup.InferType<typeof cancelAppointmentValidationSchema>>({
        resolver: yupResolver(cancelAppointmentValidationSchema),
        defaultValues: {
            reason: "",
        },
    })
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const cancelAppointment = async (values: yup.InferType<typeof cancelAppointmentValidationSchema>) => {
        await APIService.getInstance().updateAppointmentStatus(val?.id as string, { cancelReason: values.reason, status: "CANCELED" });
        setLoading(false);

        toast({
            description: "Appointment canceled!",
            variant: "success",
        });
    };


    const onSubmit = async (values: yup.InferType<typeof cancelAppointmentValidationSchema>) => {
        setLoading(true);
        try {

            await cancelAppointment(values);

            if (onSubmitData) {
                onSubmitData({} as any);
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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="px-5 py-4 flex gap-4 flex-col">

                    <div className="flex justify-between w-full">
                        <p className="text-black text-xl font-medium  leading-[30px]">
                            {t("Cancellation Reason")}
                        </p>
                        <Button variant={"ghost"} onClick={closeModal} className="px-3 py-0">
                            <X className="w-4 h-4 relative text-black" />
                        </Button>
                    </div>

                    <div className="flex flex-col gap-4">


                        <InputField hasError name="reason" placeHolder="Cancellation Reason" label="Reason" fieldType={FieldTypesEnum.Textarea} />
                    </div>

                    <div className="self-end flex gap-3">
                        <SubmitButton
                            loading={loading}
                            title={t("Submit")}
                            className=" bg-primaryBlue"
                        />
                        <Button onClick={closeModal} variant={"outline"}>
                            {t(messages.CANCEL)}
                        </Button>
                    </div>
                </form>
            </Form>

        </Modal>
    );
};

export default CancelAppointmentModal;

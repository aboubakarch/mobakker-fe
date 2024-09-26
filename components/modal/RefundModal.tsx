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


const RefundModal: FC<IModalCompProps<SampleAppointments>> = ({
    closeModal,
    visible,
    val,
    onSubmitData
}) => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const refundRequest = async () => {
        await APIService.getInstance().createRefund({ amount: val?.grossTotalAmount, appointmentId: val?.id, customerId: val?.customer?.id });
        setLoading(false);

        toast({
            description: "Refund Request Sent!",
            variant: "success",
        });
    };


    const onSubmit = async () => {
        setLoading(true);
        try {

            await refundRequest();

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
            {/* <Form {...form}> */}
            <div className="px-5 py-4 flex gap-4 flex-col">

                <div className="flex justify-between w-full">
                    <p className="text-black text-xl font-medium  leading-[30px]">
                        {t("Refund Request")}
                    </p>
                    <Button variant={"ghost"} onClick={closeModal} className="px-3 py-0">
                        <X className="w-4 h-4 relative text-black" />
                    </Button>
                </div>

                <div>Are you sure you want to refund this payment?</div>

                <div className="self-end flex gap-3">

                    <Button onClick={onSubmit} disabled={loading} variant={'default'} type='button' className={"flex items-center justify-center gap-3 bg-primaryBlue"} >
                        <div>Process</div>
                        {loading && <div className="loader_simple"></div>}
                    </Button>
                    <Button onClick={closeModal} variant={"outline"}>
                        {t(messages.CANCEL)}
                    </Button>
                </div>
            </div>
            {/* </Form> */}

        </Modal>
    );
};

export default RefundModal;

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
import { ratingValidationSchema } from "@/constants/validationSchemas";
import { messages } from "@/constants/constants";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Rating } from "react-simple-star-rating";
import { FieldTypesEnum } from "@/constants/enums";


const RatingModal: FC<IModalCompProps<SampleAppointments>> = ({
    closeModal,
    visible,
    val,
    onSubmitData
}) => {
    const { t } = useTranslation();
    const form = useForm<yup.InferType<typeof ratingValidationSchema>>({
        resolver: yupResolver(ratingValidationSchema),
        defaultValues: {
            rating: 0,
            comment: ""
        },
    })
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    const sendRating = async (values: yup.InferType<typeof ratingValidationSchema>) => {
        const rating = { id: val?.customer?.id, review: values.comment, rating: values.rating };
        await APIService.getInstance().postCustomerRating(rating as any);
        setLoading(false);

        toast({
            description: "Rating updated!",
            variant: "success",
        });
    };


    const onSubmit = async (values: yup.InferType<typeof ratingValidationSchema>) => {
        setLoading(true);
        try {

            await sendRating(values);

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
                        <p className="text-black dark:text-white text-xl font-medium  leading-[30px]">
                            {t("Customer Rating")}
                        </p>
                        <Button variant={"ghost"} onClick={closeModal} className="px-3 py-0">
                            <X className="w-4 h-4 relative text-black dark:text-white" />
                        </Button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <FormField
                            control={form.control}
                            name="rating"
                            render={({ field }) => (
                                <FormItem className='flex justify-center flex-col'>
                                    <FormLabel>Rating</FormLabel>
                                    <FormControl className="self-center">

                                        <Rating
                                            initialValue={field.value}
                                            onClick={(val) => field.onChange(val)}
                                            {...field}
                                            SVGclassName="inline-block"
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <InputField hasError name="comment" placeHolder="Review" label="Review" fieldType={FieldTypesEnum.Textarea} />
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
                </form>
            </Form>

        </Modal>
    );
};

export default RatingModal;

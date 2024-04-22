'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import Card from '@/components/card/Card';
import AppForm from '@/components/form/Form';
import InputField from '@/components/form/FormField';
import { messages } from '@/constants/constants';
import { loginFormVals } from '@/constants/forms';
import { loginValidationSchema } from '@/constants/validationSchemas';
import { useToast } from '@/hooks/use-toast';
import APIService from '@/services/api';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const Page = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const onSubmit = async (values: yup.InferType<typeof loginValidationSchema>) => {
    setLoading(true)
    console.log(values)
    try {
      const res = await APIService.getInstance().login(values);
      console.log(res)
      setLoading(false)

      toast({
        description: "Login Successful",
        variant: "default"
      })

    } catch (error) {
      setLoading(false)

      toast({
        variant: "destructive",
        description: "Error! Something went wrong",
      })
    }
  };

  return (
    <Card>
      <AppForm
        onSubmit={onSubmit}
        className="flex flex-col gap-6 justify-center h-full px-10"
        {...loginFormVals}
      >
        <h1 className="text-xl font-bold">{t(messages.SIGN_IN)}</h1>
        <div className="flex flex-col gap-3">
          <InputField {...loginFormVals.info(t).email} />
          <InputField
            {...loginFormVals.info(t).password}
          />
        </div>

        <SubmitButton title={t(messages.LOGIN)} loading={loading} className="w-full bg-indigo-800 disabled:bg-opacity-30" />
        <div className="flex justify-between text-sm">
          <p className="">{t(messages.FORGOT_PASSWORD)}</p>
          <div className="flex gap-1 items-center">
            <p>{t(messages.DONT_HAVE_ACCOUNT)}</p>
            <p className="text-primaryBlue">{t(messages.SIGN_UP)}</p>
          </div>
        </div>
      </AppForm>
    </Card>
  );
};

export default Page;

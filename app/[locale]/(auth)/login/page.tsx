'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import Card from '@/components/card/Card';
import AppForm from '@/components/form/Form';
import InputField from '@/components/form/FormField';
import { messages } from '@/constants/constants';
import { loginFormVals } from '@/constants/forms';
import { loginValidationSchema } from '@/constants/validationSchemas';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const Page = () => {
  const { t } = useTranslation();
  const onSubmit = (values: yup.InferType<typeof loginValidationSchema>) => {
    console.log(values);
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

        <SubmitButton title={t(messages.LOGIN)} className="w-full bg-primaryBlue" />
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

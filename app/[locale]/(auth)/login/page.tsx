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
        <h1 className="text-xl font-bold">{t('common:signin')}</h1>
        <div className="flex flex-col gap-3">
          <InputField {...loginFormVals.info.email} label={t('emailAddress')} />
          <InputField
            {...loginFormVals.info.password}
            placeHolder={t('password')}
          />
        </div>

        <SubmitButton title="Login" className="w-full bg-primaryBlue" />
        <div className="flex justify-between text-sm">
          <p className="">{messages.FORGOT_PASSWORD}</p>
          <div className="flex gap-1 items-center">
            <p>{messages.DONT_HAVE_ACCOUNT}</p>
            <p className="text-primaryBlue">{messages.SIGN_Up}</p>
          </div>
        </div>
      </AppForm>
    </Card>
  );
};

export default Page;

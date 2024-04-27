'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import Card from '@/components/card/Card';
import AppForm from '@/components/form/Form';
import InputField from '@/components/form/FormField';
import { messages } from '@/constants/constants';
import { loginFormVals } from '@/constants/forms';
import { loginValidationSchema } from '@/constants/validationSchemas';
import { useToast } from '@/hooks/use-toast';
import { getCookie } from '@/lib/helpers';
import APIService from '@/services/api';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()


  useEffect(() => {
    const role = getCookie("role")
    const token = getCookie("accessToken")
    if (role && token) {
      router.refresh()
    }

  }, [])


  const onSubmit = async (values: yup.InferType<typeof loginValidationSchema>) => {
    setLoading(true)
    try {
      const res = await APIService.getInstance().login(values);

      document.cookie = `accessToken=${res.token.accessToken};path=/`
      document.cookie = `refreshToken=${res.token.refreshToken};path=/`
      document.cookie = `role=${res.user.role};path=/`
      document.cookie = `userId=${res.user.id};path=/`
      setLoading(false)

      toast({
        description: "Login Successful",
        variant: "default"
      })

      router.push('/')
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
            <Link href={"/provider-registration"} className="text-primaryBlue cursor-pointer">{t(messages.SIGN_UP)}</Link>
          </div>
        </div>
      </AppForm>
    </Card>
  );
};

export default Page;

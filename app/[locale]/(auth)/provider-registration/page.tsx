'use client';
import SubmitButton from '@/components/buttons/SubmitButton';
import Card from '@/components/card/Card';
import AppForm from '@/components/form/Form';
import InputField from '@/components/form/FormField';
import { messages } from '@/constants/constants';
import { providerRegistrationFormVals } from '@/constants/forms';
import { providerRegistrationValidationSchema } from '@/constants/validationSchemas';
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

  }, [router])


  const onSubmit = async (values: yup.InferType<typeof providerRegistrationValidationSchema>) => {
    setLoading(true)
    try {
      await APIService.getInstance().registerProvider(values as any);
      router.push('/login')
      setLoading(false)

      toast({
        description: "Registration Successful",
        variant: "success"
      })

      router.refresh()
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
        {...providerRegistrationFormVals}
      >
        <h1 className="text-xl font-bold">{t(messages.SIGN_UP)}</h1>
        <div className="flex flex-col gap-3">

          <div className='flex gap-3 w-full'>
            <div className='flex-1'>
              <InputField {...providerRegistrationFormVals.info(t).firstName} />

            </div>
            <div className='flex-1'>
              <InputField {...providerRegistrationFormVals.info(t).lastName} />

            </div>

          </div>
          <div className='flex gap-3 w-full'>
            <div className='flex-1'>
              <InputField {...providerRegistrationFormVals.info(t).email} />

            </div>
            <div className='flex-1'>
              <InputField {...providerRegistrationFormVals.info(t).phone} />

            </div>

          </div>

          <InputField
            {...providerRegistrationFormVals.info(t).password}
          />
        </div>

        <SubmitButton title={t(messages.SIGN_UP)} loading={loading} className="w-full bg-indigo-800 disabled:bg-opacity-30" />
        <div className="flex justify-between text-sm">
          <div className="flex gap-1 items-center">
            <p>{t(messages.ALREADY_HAVE_ACCOUNT)}</p>
            <Link href={"/login"} className="text-primaryBlue cursor-pointer">{t(messages.SIGN_IN)}</Link>
          </div>
        </div>
      </AppForm>
    </Card>
  );
};

export default Page;

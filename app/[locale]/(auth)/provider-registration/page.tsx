'use client';
import { IOTPFormValues, IProviderFormValues } from '@/@types/forms';
import SubmitButton from '@/components/buttons/SubmitButton';
import Card from '@/components/card/Card';
import AppForm from '@/components/form/Form';
import InputField from '@/components/form/FormField';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/InputOtp';
import { messages } from '@/constants/constants';
import { otpFormVals, providerRegistrationFormVals } from '@/constants/forms';
import { otpValidationSchema, providerRegistrationValidationSchema } from '@/constants/validationSchemas';
import { useToast } from '@/hooks/use-toast';
import { getCookie } from '@/lib/helpers';
import APIService from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';
import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [otpActive, setOtpActive] = useState(false)
  const [formValues, setFormValues] = useState<null | IProviderFormValues>(null)
  const { toast } = useToast()
  const form = useForm<yup.InferType<typeof otpFormVals.validationSchema>>({
    resolver: yupResolver(otpFormVals.validationSchema),
    defaultValues: otpFormVals.initialValues,
  })


  useEffect(() => {
    const role = getCookie("role")
    const token = getCookie("accessToken")
    if (role && token) {
      router.refresh()
    }

  }, [router])


  const onSubmit = async (values: yup.InferType<typeof providerRegistrationValidationSchema>) => {
    setFormValues(values);
    setLoading(true)
    try {


      await APIService.getInstance().registerProvider(values as any);
      // router.push('/login')
      setLoading(false)

      toast({
        description: "Registration Successful",
        variant: "success"
      });
      setOtpActive(true)
      toast({
        variant: "success",
        description: "Please verify your account!",
      })


    } catch (error: any) {
      setLoading(false)

      toast({
        variant: "destructive",
        description: JSON.stringify(error?.response?.data?.message) || "Error! Something went wrong",
      })
    }
  };

  const handleVerifyOtp = async (values: yup.InferType<typeof otpValidationSchema>) => {
    setLoading(true)
    try {
      await APIService.getInstance().verifyOtp({ otp: values.pin, destinationNumber: formValues?.phone } as any);
      toast({
        description: "You have been verified Successfully.",
        variant: "success"
      });

      router.push('/login')
      router.refresh()
    } catch (error: any) {
      // form.setError("pin", { message: `${JSON.stringify(error?.response?.data?.message) || "Error! Something went wrong"}` })

      form.setError("pin", { message: "Invalid Pin!" })
      toast({
        variant: "destructive",
        description: JSON.stringify(error?.response?.data?.message) || "Error! Something went wrong",
      })
    }
    setLoading(false)
  }
  const handleGoBack = () => {
    setFormValues(null);
    setOtpActive(false)
    form.reset()
  }

  return (
    <Card>
      {!otpActive ? <AppForm
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
      </AppForm> : (
        <div className='flex items-center justify-center relative'>
          <div
            onClick={handleGoBack}
            className='absolute top-5 left-3 h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100'>
            <ChevronLeft color='black' className='h-8 w-8' />
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleVerifyOtp)} className="flex items-center justify-center flex-col space-y-6">
              <Image src={'/assets/otp.gif'} alt='otp' width={250} height={250} />
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className='flex items-center justify-center flex-col'>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton title={t(messages.VERIFY)} loading={loading} className=" bg-indigo-800 disabled:bg-opacity-30 w-36" />
            </form>
          </Form>
        </div>
      )}
    </Card>
  );
};

export default Page;

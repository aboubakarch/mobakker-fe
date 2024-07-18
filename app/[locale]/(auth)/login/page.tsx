'use client';
import { ILoginFormValues } from '@/@types/forms';
import SubmitButton from '@/components/buttons/SubmitButton';
import Card from '@/components/card/Card';
import AppForm from '@/components/form/Form';
import InputField from '@/components/form/FormField';
import { messages } from '@/constants/constants';
import { loginFormVals, otpFormVals } from '@/constants/forms';
import { loginValidationSchema, otpValidationSchema } from '@/constants/validationSchemas';
import { useToast } from '@/hooks/use-toast';
import { getCookie } from '@/lib/helpers';
import APIService from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/InputOtp';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [otpActive, setOtpActive] = useState(false)
  const [formValues, setFormValues] = useState<null | ILoginFormValues>(null)
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

  }, [])


  const onSubmit = async (values: yup.InferType<typeof loginValidationSchema>) => {
    setFormValues(values)
    setLoading(true)
    try {
      const res = await APIService.getInstance().login(values);

      document.cookie = `accessToken=${res.token.accessToken};path=/`
      document.cookie = `refreshToken=${res.token.refreshToken};path=/`
      document.cookie = `role=${res.user.role};path=/`
      document.cookie = `userId=${res.user.id};path=/`
      document.cookie = `user=${JSON.stringify(res.user)};path=/`
      setLoading(false)

      toast({
        description: "Login Successful",
        variant: "success"
      })

      router.push('/')
    } catch (error: any) {

      setLoading(false)
      if (error?.response?.data?.statusCode === 403) {
        setOtpActive(true)

      }

      toast({
        variant: "destructive",
        description: JSON.stringify(error?.response?.data?.message) || "Error! Something went wrong",
      })
    }
  };

  const handleVerifyOtp = async (values: yup.InferType<typeof otpValidationSchema>) => {
    setLoading(true)
    try {
      const res = await APIService.getInstance().verifyOtp({ otp: values.pin, loginFields: formValues } as any);
      console.log(res)
      document.cookie = `accessToken=${res.loginDetails.token.accessToken};path=/`
      document.cookie = `refreshToken=${res.loginDetails.token.refreshToken};path=/`
      document.cookie = `role=${res.loginDetails.user.role};path=/`
      document.cookie = `userId=${res.loginDetails.user.id};path=/`
      document.cookie = `user=${JSON.stringify(res.loginDetails.user)};path=/`
      setLoading(false)
      toast({
        description: "You have logged in and verified successfully.",
        variant: "success"
      });

      router.push('/')
      router.refresh()
    } catch (error: any) {
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

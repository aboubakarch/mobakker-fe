"use client"
import SubmitButton from '@/components/buttons/SubmitButton'
import AppForm from '@/components/form/Form'
import InputField from '@/components/form/FormField'
import { Button } from '@/components/ui'
import Dropzone from '@/components/ui/Dropzone'
import PageHeader from '@/components/ui/PageHeader'
import { messages } from '@/constants/constants'
import { RoleType } from '@/constants/enums'
import { branchFormVals, providerFormVals } from '@/constants/forms'
import { branchEditValidationSchema, providerValidationSchema } from '@/constants/validationSchemas'
import { useToast } from '@/hooks/use-toast'
import { convertToFormData, getCookie, isValidImageSrc, removeCookie } from '@/lib/helpers'
import APIService from '@/services/api'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup';


const Profile = () => {
    const { t } = useTranslation()
    let user: any = getCookie("user")
    user = JSON.parse(user || "null");
    const { toast } = useToast()
    const providerFormVal = providerFormVals(user as any)
    const [loading, setLoading] = useState(false)
    const [updating, setUpdating] = useState(false)

    const [image, setImage] = useState<File | null>(null);


    useEffect(() => {
        if (!user) {
            toast({
                description: "Something went wrong!",
                variant: "destructive"
            })
        }
    }, [])
    const handleLogout = () => {
        removeCookie("accessToken")
        removeCookie("refreshToken")
        removeCookie("role")
        removeCookie("userId")
        removeCookie("user")
        location.reload()
    }

    const onSubmit = async (values: yup.InferType<typeof providerValidationSchema>) => {
        console.log(values);
        setLoading(true)
        try {

            const vals = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phone: values.phone,
                role: (user as any)?.role,
                avatar: image ? image : undefined
            }
            const formData = convertToFormData(vals)


            // if ((user as any).role === RoleType.SERVICE_PROVIDER) {

            const newUser = await APIService.getInstance().editUser(formData);
            console.log(newUser)
            // }
            // else if ((user as any).role === RoleType.ADMIN) {

            //     newUser = await APIService.getInstance().editAdmin((user as any)?.id as string, vals as any);
            // }
            // else if ((user as any).role === RoleType.BRANCH_MANAGER) {
            //     newUser = await APIService.getInstance().editBranchManager((user as any)?.id as string, vals as any);
            // }
            // else if ((user as any).role === RoleType.CUSTOMER_CARE) {
            //     newUser = await APIService.getInstance().editCustomerCare((user as any)?.id as string, vals as any);
            // }

            setLoading(false)

            if (newUser) {
                document.cookie = `user=${JSON.stringify({ ...user, ...newUser })};path=/`

            }

            toast({
                description: "User Updated!",
                variant: "success"
            })
            if (values.email !== user.email) {

                handleLogout()
            }
            location.reload()
        } catch (error: any) {
            setLoading(false)

            toast({
                variant: "destructive",
                description: error?.response?.data?.message ? JSON.stringify(error?.response?.data?.message) : "Error! Something went wrong",
            })
            setUpdating(false)
        }
    };
    return (
        <div className="flex flex-col gap-4 h-full w-full p-5 pb-0 overflow-auto scrollbar dark:scrollbar-dark">
            <PageHeader title={t("User Profile")}
                description="Manage your profile."
            >
            </PageHeader>
            <div className='flex gap-4 h-min-[60%]'>
                <div className='flex-[0.30] bg-background rounded py-5 flex gap-4 flex-col'>
                    <div className='w-full border-b border-neutral-200 px-4 pb-3 text-gray-800 dark:text-white text-xl font-medium '>
                        {t("Profile Image")}
                    </div>
                    <div className='flex flex-col w-full items-center px-4 gap-5'>
                        <div className='flex flex-col gap-2 items-center'>
                            <div className='w-28 h-28 relative rounded-full '>
                                <Image
                                    fill
                                    alt='profile'
                                    src={user.avatar && isValidImageSrc(user.avatar) ? user.avatar : '/assets/profileImageFull.jpeg'}
                                    className='rounded-full'
                                />

                            </div>

                        </div>

                        {updating && <Dropzone title={t(messages.UPLOAD_IMAGE)} subtitle={t(messages.IMAGE_FORMATS)} onFileSelect={(file) => setImage(file)} />
                        }
                    </div>

                </div>
                <div className='flex-[0.70] bg-background rounded'>

                    <AppForm
                        onSubmit={onSubmit}
                        className="px-3 py-4 flex gap-4 flex-col"
                        {...providerFormVal}>

                        <div className='flex gap-3 w-full'>
                            <div className='flex-1'>
                                <InputField {...providerFormVal.info(t).firstName} disabled={!updating} />

                            </div>
                            <div className='flex-1'>
                                <InputField {...providerFormVal.info(t).lastName} disabled={!updating} />

                            </div>

                        </div>
                        <InputField {...providerFormVal.info(t).email} disabled={!updating} />
                        <InputField {...providerFormVal.info(t).phone} disabled={!updating} />


                        {updating && <div className='self-end flex gap-3'>
                            <SubmitButton loading={loading} title={t(messages.EDIT)} className="self-end bg-primaryBlue" />
                            <Button onClick={() => setUpdating(false)} variant={"outline"} >
                                {t(messages.CANCEL)}
                            </Button>

                        </div>}
                        {!updating &&
                            <div className="flex">
                                <Button onClick={() => setUpdating(true)} variant={"ghost"} className='text-indigo-800'>{t(messages.UPDATE)}</Button>
                            </div>

                        }

                    </AppForm>



                </div>

            </div>



        </div>
    )
}

export default Profile
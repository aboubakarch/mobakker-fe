import React, { FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalDetailsProps } from '@/@types/modals'
import { useToast } from '@/hooks/use-toast'
import Modal from '../Modal'
import { Button } from '@/components/ui'
import Image from 'next/image'
import { isValidImageSrc } from '@/lib/helpers'
import moment from 'moment'



const EmployeeDetailsModal: FC<IModalDetailsProps<SampleEmployee>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }
    console.log(val)

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl dark:shadow-white/10 md:w-[55%]'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <div></div>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>
                </div>
                <div className='flex gap-16 ltr:divide-x rtl:divide-x-reverse'>
                    <div className='h-full flex flex-col gap-3 ltr:pl-4 rtl:pr-4'>
                        <div className="flex gap-3">
                            <div className="rounded-full h-24 w-24  relative">
                                <Image
                                    src={val.avatar && isValidImageSrc(val.avatar) ? val.avatar : '/assets/sampleImage.jpg'}
                                    alt="pfp"
                                    fill
                                    className="rounded-full"
                                />
                            </div>

                        </div>
                        <p className='text-black dark:text-white text-xl font-medium leading-[30px]'>{`${val.firstName} ${val.lastName}`}</p>

                    </div>

                    <div className="space-y-4 ltr:pl-7 rtl:pr-7">
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.EMAIL)}</p>
                            <p>{val.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.PHONE)}</p>
                            <p>{val.phone}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.ACTIVE_STATUS)}</p>
                            <p>{val.data.isActive ? 'Active' : 'Inactive'}</p>
                        </div>

                        {/* {val.data.user && (
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">User</p>
                            <p>{`${val.data.user.firstName} ${val.data.user.lastName}`}</p>
                        </div>
                    )} */}
                        {val.data.branches && val.data.branches.length > 0 && (
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white mb-3">{t(messages.BRANCH)}</p>
                                <div className="grid grid-cols-2 grid-flow-row gap-5">
                                    {val.data.branches.map((branch) => (
                                        <div key={branch.id} className="flex gap-3 items-center justify-center w-max">
                                            <div className="rounded-full h-11 w-11 relative">
                                                <Image
                                                    src={branch.avatar && isValidImageSrc(branch.avatar) ? branch.avatar : '/assets/sampleImage.jpg'}
                                                    alt="pfp"
                                                    fill
                                                    className="rounded-full"
                                                />
                                            </div>
                                            <div className="flex flex-col text-sm font-medium leading-snug">
                                                <p className="text-gray-900 dark:text-white">{branch.name}</p>
                                                <p className="text-indigo-800">{branch.city}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {val.data.empBranch && (
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white mb-3">{t(messages.BRANCH)}</p>
                                <div className="flex gap-3 items-center justify-center w-max">
                                    <div className="rounded-full h-11 w-11 relative">
                                        <Image
                                            src={val.data.empBranch.avatar && isValidImageSrc(val.data.empBranch.avatar) ? val.data.empBranch.avatar : '/assets/sampleImage.jpg'}
                                            alt="pfp"
                                            fill
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col text-sm font-medium leading-snug">
                                        <p className="text-gray-900 dark:text-white">{val.data.empBranch.name}</p>
                                        <p className="text-indigo-800">{val.data.empBranch.city}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {(val?.data?.employer as any)?.user && (
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">{t(messages.EMPLOYER)}</p>
                                <p>{`${(val.data.employer as any).user?.firstName} ${(val.data.employer as any)?.user?.lastName}`}</p>
                            </div>
                        )}
                        {val.data.rating !== undefined && (
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">{t(messages.RATING)}</p>
                                <p>{val.data.rating}</p>
                            </div>
                        )}
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.CREATED_AT)}</p>
                            <p>{moment(val.data.createdAt).format("DD MMM YYYY hh:mm")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.UPDATED_AT)}</p>
                            <p>{moment(val.data.updatedAt).format("DD MMM YYYY hh:mm")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EmployeeDetailsModal;

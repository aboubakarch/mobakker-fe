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
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl md:w-[55%]'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <div></div>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div className='flex gap-16 divide-x'>
                    <div className='h-full flex flex-col gap-3 pl-4'>
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
                        <p className='text-black text-xl font-medium leading-[30px]'>{`${val.firstName} ${val.lastName}`}</p>

                    </div>

                    <div className="space-y-4 pl-7">
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p>{val.email}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p>{val.phone}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Active Status</p>
                            <p>{val.data.isActive ? 'Active' : 'Inactive'}</p>
                        </div>

                        {/* {val.data.user && (
                        <div>
                            <p className="text-sm text-gray-500">User</p>
                            <p>{`${val.data.user.firstName} ${val.data.user.lastName}`}</p>
                        </div>
                    )} */}
                        {val.data.branches && val.data.branches.length > 0 && (
                            <div>
                                <p className="text-sm text-gray-500 mb-3">Branches</p>
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
                                                <p className="text-gray-900">{branch.name}</p>
                                                <p className="text-indigo-800">{branch.city}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {val.data.empBranch && (
                            <div>
                                <p className="text-sm text-gray-500 mb-3">Branch</p>
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
                                        <p className="text-gray-900">{val.data.empBranch.name}</p>
                                        <p className="text-indigo-800">{val.data.empBranch.city}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {(val?.data?.employer as any)?.user && (
                            <div>
                                <p className="text-sm text-gray-500">Employer</p>
                                <p>{`${(val.data.employer as any).user?.firstName} ${(val.data.employer as any)?.user?.lastName}`}</p>
                            </div>
                        )}
                        {val.data.rating !== undefined && (
                            <div>
                                <p className="text-sm text-gray-500">Rating</p>
                                <p>{val.data.rating}</p>
                            </div>
                        )}
                        <div>
                            <p className="text-sm text-gray-500">Created At</p>
                            <p>{moment(val.data.createdAt).format("DD MMM YYYY hh:mm")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Updated At</p>
                            <p>{moment(val.data.updatedAt).format("DD MMM YYYY hh:mm")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default EmployeeDetailsModal;

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

const BranchDetailsModal: FC<IModalDetailsProps<SampleBranch>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null
    }


    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl md:w-[55%]'>
            <div
                className="px-6 py-5 flex flex-col"
            >
                <div className='flex justify-between w-full'>
                    {/* <p className='text-black text-xl font-medium  leading-[30px]'>{t(val?.name)}</p> */}
                    <div></div>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>

                <div className='flex gap-16 divide-x'>
                    <div className='h-full flex flex-col pl-4 gap-3 '>
                        <div className="flex gap-3">
                            <div className="rounded-full h-24 w-24 relative">
                                <Image
                                    src={val.avatar && isValidImageSrc(val.avatar) ? val.avatar : '/assets/sampleImage.jpg'}
                                    alt="pfp"
                                    fill
                                    className="rounded-full"
                                />
                            </div>

                        </div>
                        <p className='text-black text-xl font-medium  leading-[30px]'>{t(val?.name)}</p>
                    </div>
                    {/* <div></div> */}

                    <div className="space-y-4 pl-7">
                        <div>
                            <p className="text-sm text-gray-500">Address</p>
                            <p>{val?.address}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">City</p>
                            <p>{val?.city}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Country</p>
                            <p>{val?.country}</p>
                        </div>
                        {/* {val?.ownerId && <div>
                            <p className="text-sm text-gray-500">Owner ID</p>
                            <p>{val?.ownerId}</p>
                        </div>} */}
                        {val?.owner && val?.owner?.user && <div>
                            <p className="text-sm text-gray-500">Owner Name</p>
                            <p>{`${val?.owner?.user?.firstName} ${val?.owner?.user?.lastName}`}</p>
                        </div>}
                        {/* {val.managerId && <div>
                            <p className="text-sm text-gray-500">Manager ID</p>
                            <p>{val?.managerId}</p>
                        </div>} */}
                        {val?.manager && val?.manager?.user && <div>
                            <p className="text-sm text-gray-500">Manager Name</p>
                            <p>{`${val?.manager?.user?.firstName} ${val?.manager?.user?.lastName}`}</p>
                        </div>}
                        {val?.services && Array.isArray(val.services) && <div>
                            <p className="text-sm text-gray-500">No. of Services</p>
                            <p>{val?.services.length}</p>
                        </div>}
                        {val?.appointments && Array.isArray(val?.appointments) && <div>
                            <p className="text-sm text-gray-500">No. of Appointments</p>
                            <p>{val?.appointments.length}</p>
                        </div>}


                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default BranchDetailsModal
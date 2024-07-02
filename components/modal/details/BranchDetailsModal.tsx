import React, { FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalDetailsProps } from '@/@types/modals'
import { useToast } from '@/hooks/use-toast'
import Modal from '../Modal'
import { Button } from '@/components/ui'

const BranchDetailsModal: FC<IModalDetailsProps<SampleBranch>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null
    }


    return (
        <Modal visibility={visible} closeModal={closeModal} position={2}>
            <div
                className="px-3 py-4 flex gap-4 flex-col"
            >
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium  leading-[30px]'>{t(messages.BRANCH)}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <h2 className="text-2xl font-bold mb-4">{val?.name}</h2>
                <div className="space-y-4">
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
                    <div>
                        <p className="text-sm text-gray-500">Owner ID</p>
                        <p>{val?.ownerId}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Manager ID</p>
                        <p>{val?.managerId}</p>
                    </div>
                    {val?.services.length > 0 && (
                        <div>
                            <p className="text-sm text-gray-500">Services</p>
                            <div className="space-y-2">
                                {val?.services.map((service) => (
                                    <div key={service.id} className="border p-4 rounded">
                                        <p className="font-semibold">{service.name}</p>
                                        <p className="text-sm text-gray-500">Type: {service.serviceType.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </Modal>
    )
}

export default BranchDetailsModal
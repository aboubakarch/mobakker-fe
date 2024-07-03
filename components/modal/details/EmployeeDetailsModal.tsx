import React, { FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalDetailsProps } from '@/@types/modals'
import { useToast } from '@/hooks/use-toast'
import Modal from '../Modal'
import { Button } from '@/components/ui'



const EmployeeDetailsModal: FC<IModalDetailsProps<SampleEmployee>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium leading-[30px]'>{`${val.firstName} ${val.lastName}`}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div className="space-y-4">
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
                    <div>
                        <p className="text-sm text-gray-500">Created At</p>
                        <p>{val.data.createdAt}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Updated At</p>
                        <p>{val.data.updatedAt}</p>
                    </div>
                    {/* {val.data.user && (
                        <div>
                            <p className="text-sm text-gray-500">User</p>
                            <p>{`${val.data.user.firstName} ${val.data.user.lastName}`}</p>
                        </div>
                    )} */}
                    {val.data.empBranch && (
                        <div>
                            <p className="text-sm text-gray-500">Branch</p>
                            <p>{val.data.empBranch.name}</p>
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
                </div>
            </div>
        </Modal>
    );
};

export default EmployeeDetailsModal;

import React, { FC, useEffect, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { messages } from '@/constants/constants'
import { X } from 'lucide-react'
import { IModalDetailsProps } from '@/@types/modals'
import { useToast } from '@/hooks/use-toast'
import Modal from '../Modal'
import { Button } from '@/components/ui'


const AppointmentDetailsModal: FC<IModalDetailsProps<SampleAppointments>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium leading-[30px]'>{`${val.services.name} - ${val.bookingDate}`}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-500">Booking Slot</p>
                        <p>{val.bookingSlot}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Booking Date</p>
                        <p>{val.bookingDate}</p>
                    </div>
                    <div className='grid grid-cols-2 grid-flow-row gap-5'>
                        <div>
                            <p className="text-sm text-gray-500">Repeat</p>
                            <p>{val.repeat}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Gross Total Amount</p>
                            <p>{val.grossTotalAmount}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Discount</p>
                            <p>{val.discount}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Net Total Amount</p>
                            <p>{val.netTotalAmount}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Payment Status</p>
                            <p>{val.paymentStatus}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Payment Type</p>
                            <p>{val.paymentType}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Status</p>
                            <p>{val.status}</p>
                        </div>
                    </div>
                    {/* <div>
                        <p className="text-sm text-gray-500">Customer ID</p>
                        <p>{val.customer.id}</p>
                    </div> */}
                    {(val?.customer as any)?.user && <div>
                        <p className="text-sm text-gray-500">Customer Name</p>
                        <p>{`${(val?.customer as any)?.user?.firstName} ${(val?.customer as any)?.user?.lastName}`}</p>
                    </div>}
                    {(val as any)?.employee?.user && <div>
                        <p className="text-sm text-gray-500">Customer User ID</p>
                        <p>{`${(val as any)?.employee?.user?.firstName} ${(val as any)?.employee?.user?.lastName}`}</p>
                    </div>}
                    <div>
                        <p className="text-sm text-gray-500">Service</p>
                        <p>{val.services.name}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Branch</p>
                        <p>{val.branch.name}</p>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AppointmentDetailsModal;

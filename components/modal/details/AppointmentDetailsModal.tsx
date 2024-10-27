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
import AssignEmployeeModal from '../ReassignEmployeeModal'
import CountdownTimer from '@/components/countdown/Countdown'
import { AppointmentStatus, statusColors, statusIcons, statusOptions } from '@/components/table/columns/AppointmentsColumn'


const AppointmentDetailsModal: FC<IModalDetailsProps<SampleAppointments>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);

    if (!val) {
        return null;
    }




    return (
        <div>
            <AssignEmployeeModal visible={modal} closeModal={() => setModal(false)} val={val} />
            <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl dark:shadow-white/10'>

                <div className="px-6 py-5 flex gap-4 flex-col">
                    <div className='flex justify-between w-full'>
                        <p className='text-black dark:text-white text-xl font-medium leading-[30px]'>{`${val.services.name} - ${val.bookingDate}`}</p>
                        <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                            <X className='w-4 h-4 relative text-black dark:text-white' />
                        </Button>
                    </div>
                    <div className="space-y-4">
                        <div><CountdownTimer {...val} /></div>
                        <ol className="items-center sm:flex flex-wrap gap-y-2">
                            {statusOptions.map((status, index) => {
                                // Determine if we should render this status
                                const isPaid = val.paymentStatus === "PAID" || val.paymentStatus === "APPROVED"
                                const isRated = val.paymentStatus === "PAID" || val.paymentStatus === "APPROVED"
                                const isCurrentOrPast =
                                    statusOptions.findIndex(option => option.value === status.value) <=
                                    statusOptions.findIndex(option => option.value === val.status);
                                const isExcludedStatus =
                                    ((val.status === AppointmentStatus.REJECTED || val.status === AppointmentStatus.CANCELED) &&
                                        ([AppointmentStatus.COMPLETED, AppointmentStatus.PAID, AppointmentStatus.RATED, AppointmentStatus.STARTED, (val.status === AppointmentStatus.CANCELED ? AppointmentStatus.REJECTED : AppointmentStatus.CANCELED)].includes(status.value)))
                                    ||
                                    (val.status === AppointmentStatus.COMPLETED && (status.value === AppointmentStatus.REJECTED || status.value === AppointmentStatus.CANCELED));

                                if (isExcludedStatus) return null; // Skip rendering excluded statuses

                                if ((status.value === AppointmentStatus.REJECTED || status.value === AppointmentStatus.CANCELED) && status.value !== val.status) {
                                    return null
                                }

                                return (
                                    <li key={status.value} className="relative mb-6 sm:mb-0">
                                        <div className="flex items-center">
                                            <div
                                                className={`z-10 flex items-center justify-center w-10 h-10 ${isCurrentOrPast ? statusColors[status.value] : 'bg-gray-300 dark:bg-gray-700'
                                                    } rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0`}
                                            >
                                                {statusIcons[status.value]}
                                            </div>
                                            {index < statusOptions.length - 1 && !(status.value === AppointmentStatus.REJECTED || status.value === AppointmentStatus.CANCELED) && (
                                                <div
                                                    className={`hidden sm:flex min-w-16 w-full h-0.5 ${isCurrentOrPast ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-300 dark:bg-gray-600'
                                                        }`}
                                                ></div>
                                            )}
                                        </div>
                                        <div className="mt-3 relative sm:pe-8">
                                            <h3
                                                className={`text-sm font-semibold ${isCurrentOrPast ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                                                    }`}
                                            >
                                                {status.name}
                                            </h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Booking Slot</p>
                            <p>{val.bookingSlot}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Booking Date</p>
                            <p>{val.bookingDate}</p>
                        </div>
                        <div className='grid grid-cols-2 grid-flow-row gap-5'>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Repeat</p>
                                <p>{val.repeat}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Gross Total Amount</p>
                                <p>{val.grossTotalAmount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Discount</p>
                                <p>{val.discount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Net Total Amount</p>
                                <p>{val.netTotalAmount}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Payment Status</p>
                                <p>{val.paymentStatus}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Payment Type</p>
                                <p>{val.paymentType}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Status</p>
                                <p>{val.status}</p>
                            </div>
                        </div>
                        {/* <div>
                        <p className="text-sm text-gray-500 dark:text-white">Customer ID</p>
                        <p>{val.customer.id}</p>
                    </div> */}
                        {(val?.customer as any)?.user && <div>
                            <p className="text-sm text-gray-500 dark:text-white">Customer Name</p>
                            <p>{`${(val?.customer as any)?.user?.firstName} ${(val?.customer as any)?.user?.lastName}`}</p>
                        </div>}
                        {(val as any)?.employee?.user && <div className='flex flex-row justify-between items-center'>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white">Employee Name</p>
                                <p>{`${(val as any)?.employee?.user?.firstName} ${(val as any)?.employee?.user?.lastName}`}</p>

                            </div>
                            <Button onClick={() => setModal(true)} className='bg-indigo-800 hover:brightness-90 text-white'>
                                Reassign
                            </Button>
                        </div>}
                        <div className='grid grid-cols-2 grid-flow-row gap-5'>

                            <div>
                                <p className="text-sm text-gray-500 dark:text-white mb-3">Service</p>
                                <div className="flex gap-3 items-center justify-center w-max">
                                    <div className="rounded-full h-11 w-11 relative">
                                        <Image
                                            src={val.services.avatar && isValidImageSrc(val.services.avatar) ? val.services.avatar : '/assets/sampleImage.jpg'}
                                            alt="pfp"
                                            fill
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col text-sm font-medium leading-snug">
                                        <p className="text-gray-900 dark:text-white">{val.services.name}</p>
                                        <p className="text-indigo-800">{val.services.price}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-white mb-3">Branch</p>
                                <div className="flex gap-3 items-center justify-center w-max">
                                    <div className="rounded-full h-11 w-11 relative">
                                        <Image
                                            src={val.branch.avatar && isValidImageSrc(val.branch.avatar) ? val.branch.avatar : '/assets/sampleImage.jpg'}
                                            alt="pfp"
                                            fill
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col text-sm font-medium leading-snug">
                                        <p className="text-gray-900 dark:text-white">{val.branch.name}</p>
                                        <p className="text-indigo-800">{val.branch.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>







                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AppointmentDetailsModal;

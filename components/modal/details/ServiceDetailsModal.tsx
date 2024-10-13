import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { IModalDetailsProps } from '@/@types/modals';
import { useToast } from '@/hooks/use-toast';
import Modal from '../Modal';
import { Button } from '@/components/ui';
import moment from 'moment';
import Image from 'next/image';
import { isValidImageSrc } from '@/lib/helpers';



const ServiceDetailsModal: FC<IModalDetailsProps<SampleServices>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl dark:shadow-white/10 md:w-[55%] max-h-[80%] overflow-auto scrollbar dark:scrollbar-dark'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <div></div>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>
                </div>
                <div className="space-y-4">
                    <div className='h-full flex flex-col gap-3 '>
                        <div className="flex gap-3">
                            <div className="rounded-full h-20 w-20 relative">
                                <Image
                                    src={val.avatar && isValidImageSrc(val.avatar) ? val.avatar : '/assets/sampleImage.jpg'}
                                    alt="pfp"
                                    fill
                                    className="rounded-full"
                                />
                            </div>

                        </div>

                        <p className='text-black dark:text-white text-xl font-medium leading-[30px]'>{val.name}</p>
                    </div>

                    <div className='grid grid-cols-2 grid-flow-row gap-3'>

                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Service Type</p>
                            <p>{val.serviceType.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Rating</p>
                            <p>{val.rating}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Price</p>
                            <p>{val.price}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Booking Capacity</p>
                            <p>{val.bookingCapacity}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Slot Time</p>
                            <p>{val.slotTime}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Work Hour From</p>
                            <p>{val.workHourFrom}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Work Hour To</p>
                            <p>{val.workHourTo}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Created At</p>
                            <p>{moment(val.createdAt).format("DD-MMM-YYYY hh:mm a")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">Updated At</p>
                            <p>{moment(val.updatedAt).format("DD-MMM-YYYY hh:mm a")}</p>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-white mb-3">Availability</p>
                        <div className="grid grid-flow-row grid-cols-4 gap-3 items-center">
                            {val.availablity.split(",").map((a: any, i: number) => (
                                <div className={"p-2  rounded justify-center items-center text-white text-[9px] font-medium leading-tight text-center bg-indigo-800"} key={i}>{a}</div>
                            ))}
                        </div>                    </div>
                    {val.branches && val.branches.length > 0 && (
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white mb-3">Branches</p>
                            <div className="grid grid-cols-2 grid-flow-row gap-5">
                                {val.branches.map((branch) => (
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
                </div>
            </div>
        </Modal>
    );
};

export default ServiceDetailsModal;

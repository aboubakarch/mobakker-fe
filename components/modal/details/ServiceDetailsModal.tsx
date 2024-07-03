import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { IModalDetailsProps } from '@/@types/modals';
import { useToast } from '@/hooks/use-toast';
import Modal from '../Modal';
import { Button } from '@/components/ui';
import moment from 'moment';



const ServiceDetailsModal: FC<IModalDetailsProps<SampleServices>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium leading-[30px]'>{val.name}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div className="space-y-4">
                    <div className='grid grid-cols-2 grid-flow-row gap-3'>

                        <div>
                            <p className="text-sm text-gray-500">Service Type</p>
                            <p>{val.serviceType.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Rating</p>
                            <p>{val.rating}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Price</p>
                            <p>{val.price}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Booking Capacity</p>
                            <p>{val.bookingCapacity}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Slot Time</p>
                            <p>{val.slotTime}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Work Hour From</p>
                            <p>{val.workHourFrom}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Work Hour To</p>
                            <p>{val.workHourTo}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Created At</p>
                            <p>{moment(val.createdAt).format("DD-MMM-YYYY hh:mm a")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Updated At</p>
                            <p>{moment(val.updatedAt).format("DD-MMM-YYYY hh:mm a")}</p>
                        </div>

                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Availability</p>
                        <div className="grid grid-rows-2 grid-cols-4 gap-3 items-center">
                            {val.availablity.split(",").map((a: any, i: number) => (
                                <div className={"p-2  rounded justify-center items-center text-white text-[9px] font-medium leading-tight text-center bg-indigo-800"} key={i}>{a}</div>
                            ))}
                        </div>                    </div>
                    {val.branches && val.branches.length > 0 && (
                        <div>
                            <p className="text-sm text-gray-500">Branches</p>
                            <ul className="list-disc list-inside">
                                {val.branches.map((branch) => (
                                    <li key={branch.id}>
                                        {branch.name} - {branch.city}, {branch.country}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ServiceDetailsModal;

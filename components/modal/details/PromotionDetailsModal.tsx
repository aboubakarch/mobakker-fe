import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { IModalDetailsProps } from '@/@types/modals';
import Modal from '../Modal';
import { Button } from '@/components/ui';
import moment from 'moment';



const PromotionDetailsModal: FC<IModalDetailsProps<SamplePromotions>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <p className='text-black text-xl font-medium leading-[30px]'>{val.promoCode}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black' />
                    </Button>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-500">Description</p>
                        <p>{val.description}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Start Date</p>
                        <p>{val.startDate.toString()}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">End Date</p>
                        <p>{val.endDate.toString()}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Type</p>
                        <p>{val.type}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Created At</p>
                        <p>{moment(val.createdAt).format("DD-MMM-YYYY hh:mm a")}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Updated At</p>
                        <p>{moment(val.updatedAt).format("DD-MMM-YYYY hh:mm a")}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p>{val.isActive ? "Active" : "Inactive"}</p>
                    </div>
                    {val.services && val.services.length > 0 && (
                        <div>
                            <p className="text-sm text-gray-500">Services</p>
                            <ul className="list-disc list-inside">
                                {val.services.map((service) => (
                                    <li key={service.id}>{service.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default PromotionDetailsModal;

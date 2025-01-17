import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { IModalDetailsProps } from '@/@types/modals';
import Modal from '../Modal';
import { Button } from '@/components/ui';
import moment from 'moment';
import Image from 'next/image';
import { isValidImageSrc } from '@/lib/helpers';
import { messages } from '@/constants/constants';



const PromotionDetailsModal: FC<IModalDetailsProps<SamplePromotions>> = ({ closeModal, val, visible }) => {
    const { t } = useTranslation();

    if (!val) {
        return null;
    }

    return (
        <Modal visibility={visible} closeModal={closeModal} position={2} className='shadow-xl dark:shadow-white/10 md:w-[55%] max-h-[80%] overflow-auto scrollbar dark:scrollbar-dark'>
            <div className="px-6 py-5 flex gap-4 flex-col">
                <div className='flex justify-between w-full'>
                    <p className='text-black dark:text-white text-xl font-medium leading-[30px]'>{val.promoCode}</p>
                    <Button variant={'ghost'} onClick={closeModal} className='px-3 py-0'>
                        <X className='w-4 h-4 relative text-black dark:text-white' />
                    </Button>
                </div>
                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-gray-500 dark:text-white">{t(messages.DESCRIPTION)}</p>
                        <p>{val.description}</p>
                    </div>
                    <div className='grid grid-cols-2 grid-flow-row gap-5'>

                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.START_DATE)}</p>
                            <p>{val.startDate.toString()}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.END_DATE)}</p>
                            <p>{val.endDate.toString()}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.TYPE)}</p>
                            <p>{val.type}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.CREATED_AT)}</p>
                            <p>{moment(val.createdAt).format("DD-MMM-YYYY hh:mm a")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.UPDATED_AT)}</p>
                            <p>{moment(val.updatedAt).format("DD-MMM-YYYY hh:mm a")}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white">{t(messages.STATUS)}</p>
                            <p>{val.isActive ? "Active" : "Inactive"}</p>
                        </div>
                    </div>
                    {val.services && val.services.length > 0 && (
                        <div>
                            <p className="text-sm text-gray-500 dark:text-white mb-3">{t(messages.SERVICES)}</p>
                            <div className="grid grid-cols-2 grid-flow-row gap-5">
                                {val.services.map((service) => (
                                    <div key={service.id} className="flex gap-3 items-center justify-center w-max">
                                        <div className="rounded-full h-11 w-11 relative">
                                            <Image
                                                src={service.avatar && isValidImageSrc(service.avatar) ? service.avatar : '/assets/sampleImage.jpg'}
                                                alt="pfp"
                                                fill
                                                className="rounded-full"
                                            />
                                        </div>
                                        <div className="flex flex-col text-sm font-medium leading-snug">
                                            <p className="text-gray-900 dark:text-white">{service.name}</p>
                                            <p className="text-indigo-800">{service.price}</p>
                                        </div>
                                    </div>))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default PromotionDetailsModal;

"use client"
import React, { FC } from 'react'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'
import { AlertTriangleIcon } from 'lucide-react'
import { IDeleteModalProps } from '@/@types/modals'
import { Button } from '../ui'
import { messages } from '@/constants/constants'


const DeleteModal: FC<IDeleteModalProps> = ({ closeModal, visible, onDelete, title = "", loading = false }) => {
    const { t } = useTranslation();

    return (
        <Modal visibility={visible} closeModal={closeModal} className='md:w-[35%]'>
            <div className='p-10 flex flex-col gap-5'>
                <div className='flex flex-col gap-3 items-center'>
                    <div>
                        <div className='w-16 h-16 rounded-full flex items-center justify-center bg-rose-100'>
                            <AlertTriangleIcon className='w-9 h-9 text-rose-600' />
                        </div>
                    </div>
                    <h1 className="text-center text-gray-900 text-xl font-semibold  leading-[30px]">{t(messages.ARE_YOU_SURE)}</h1>
                    <div className=" text-center">
                        <span className="text-gray-500 text-base font-normal leading-normal">{t(messages.DELETE_CONFIRMATION)} </span>
                        <span className="text-black text-base font-bold font-['Inter'] leading-normal">{t(title)}</span>
                    </div>

                </div>
                <div className='flex gap-4 items-center justify-center'>

                    <Button onClick={closeModal} className='bg-background text-black hover:bg-indigo-800 hover:bg-opacity-5 border border-zinc-200'>{t(messages.CANCEL)}</Button>
                    <Button onClick={onDelete} disabled={loading} className='flex items-center justify-center gap-3 bg-red-500 hover:bg-red-400 text-white' >
                        <div>{t(messages.DELETE)}</div>
                        {loading && <div className="loader_simple"></div>}
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default DeleteModal
"use client"
import React, { FC, useEffect } from 'react'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'
import { IModalCompProps } from '@/@types/modals'


declare var Moyasar: any;

const PaymentModal: FC<IModalCompProps> = ({ closeModal, visible }) => {
    const { t } = useTranslation();
    useEffect(() => {
        if (visible && typeof Moyasar !== undefined) {
            try {

                Moyasar?.init({
                    element: '.mysr-form',
                    // Amount in the smallest currency unit.
                    // For example:
                    // 10 SAR = 10 * 100 Halalas
                    // 10 KWD = 10 * 1000 Fils
                    // 10 JPY = 10 JPY (Japanese Yen does not have fractions)
                    amount: 1000,
                    currency: 'SAR',
                    description: 'Subscription',
                    publishable_api_key: 'pk_test_d8PEX4WHH1hxvdcfkZ46NBkYf4a3ATPqhCNCKqTg',
                    callback_url: 'http://localhost:3000/provider',
                    methods: ['creditcard']
                })
            } catch (error) {
                console.log(error)
            }

        }
    }, [visible])
    return (
        <Modal visibility={visible} closeModal={closeModal} className='md:w-[35%]'>
            <div className='p-10 flex flex-col gap-5'>

                <h1 className="text-center text-gray-900 text-xl font-semibold  leading-[30px]">{t("Buy Subscription")}</h1>
                <div className='mysr-form'>

                </div>
            </div>
        </Modal>
    )
}

export default PaymentModal
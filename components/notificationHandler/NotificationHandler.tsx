"use client"
import { runOneSignal } from '@/lib/helpers';
import APIService from '@/services/api';
import React, { useEffect, useState } from 'react'
import OneSignal from 'react-onesignal';


const NotificationHandler = () => {
    const [init, setInit] = useState(false)
    const [permission, setPermission] = useState(false)

    useEffect(() => {
        if (!init) {
            runOneSignal().then((val) => setInit(val));

        }
    }, []); // <-- run this effect once on mount    return <div className='absolute'>

    const updateUser = async () => {
        try {
            const newUser = await APIService.getInstance().addNoticationId({ notificationId: OneSignal.User.PushSubscription.id })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (init) {
            if (!OneSignal.Notifications.permission && OneSignal.User.PushSubscription.id) {
                OneSignal.Slidedown.promptPush().then(() => setPermission(true));
            } else {
                updateUser()
            }


        }
    }, [init, permission])
    return (
        <div className='absolute'></div>
    )
}

export default NotificationHandler
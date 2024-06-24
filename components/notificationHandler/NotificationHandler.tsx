"use client"
import React, { useEffect } from 'react'
import OneSignal from 'react-onesignal';
async function runOneSignal() {
    await OneSignal.init({ appId: '8049f716-71c3-43ff-809a-c1cb19b3422b', safari_web_id: "web.onesignal.auto.253751a8-ac24-4181-97da-883dbdadac49", allowLocalhostAsSecureOrigin: true });
    OneSignal.Slidedown.promptPush();
}

const NotificationHandler = () => {
    useEffect(() => {
        runOneSignal();
    }, []); // <-- run this effect once on mount    return <div className='absolute'>

    return (
        <div className='absolute'></div>
    )
}

export default NotificationHandler
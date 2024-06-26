"use client"
import { runOneSignal } from '@/lib/helpers';
import React, { useEffect } from 'react'


const NotificationHandler = () => {
    useEffect(() => {
        console.log("first")
        runOneSignal();
    }, []); // <-- run this effect once on mount    return <div className='absolute'>

    return (
        <div className='absolute'></div>
    )
}

export default NotificationHandler
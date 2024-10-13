"use client"

import { cn } from '@/lib/utils';
import React, { useState, useEffect, FC } from 'react';

const CountdownTimer: FC<SampleAppointments> = ({ bookingDate, bookingSlot, status }) => {
    const [timeLeft, setTimeLeft] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Extract start time from bookingSlot (e.g., "10:00 AM-10:45 AM")
        const [startTime] = bookingSlot.split('-');

        // Function to update the countdown
        const updateCountdown = () => {
            const now = new Date();

            // Get current date in a readable format (e.g., "October 13, 2024")
            setCurrentDate(now.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }));

            // Parse booking date and start time into a Date object
            const targetDateTime = new Date(bookingDate);
            const [hours, minutes, period] = startTime.trim().split(/[: ]/);
            targetDateTime.setHours(period === 'PM' ? parseInt(hours) + 12 : parseInt(hours), parseInt(minutes), 0);

            // Calculate the time difference in milliseconds
            const timeDiff = (targetDateTime as any) - (now as any);

            if (timeDiff > 0) {
                // Convert milliseconds to days, hours, minutes, and seconds
                const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hoursLeft = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
                const minutesLeft = Math.floor((timeDiff / (1000 * 60)) % 60);
                const secondsLeft = Math.floor((timeDiff / 1000) % 60);

                // Update the state with the formatted countdown
                setTimeLeft(`${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`);
            } else {
                // If time has passed, set it to "Expired/Completed"
                setTimeLeft(status === "COMPLETED" ? "Completed" : 'Expired');
            }
        };

        // Update countdown immediately and set interval to update every second
        updateCountdown();
        const intervalId = setInterval(updateCountdown, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [bookingDate, bookingSlot]);

    return (
        <div>
            {(timeLeft !== "Expired" && timeLeft !== "Completed") && <p>Time Left: {timeLeft}</p>}
            {(timeLeft === "Expired" || timeLeft === "Completed") && <p className={cn("px-2 rounded-lg py-1 max-w-fit", timeLeft === "Expired" ? "bg-gray-600" : "bg-green-600")}>{timeLeft}</p>}
        </div>
    );
};

export default CountdownTimer;

"use client"
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { colorHelper } from '@/lib/helpers';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const defaultData: { [key: string]: DayData } = {
    January: { completed: 20, pending: 30, started: 10, rejected: 5, canceled: 3 },
    February: { completed: 40, pending: 50, started: 20, rejected: 10, canceled: 6 },
    March: { completed: 50, pending: 70, started: 30, rejected: 15, canceled: 9 },
    April: { completed: 30, pending: 60, started: 15, rejected: 7, canceled: 4 },
    May: { completed: 50, pending: 80, started: 25, rejected: 12, canceled: 5 },
    June: { completed: 30, pending: 90, started: 18, rejected: 9, canceled: 6 },
    July: { completed: 40, pending: 60, started: 22, rejected: 11, canceled: 7 },
    August: { completed: 45, pending: 65, started: 20, rejected: 10, canceled: 8 },
    September: { completed: 55, pending: 75, started: 28, rejected: 13, canceled: 9 },
    October: { completed: 60, pending: 85, started: 35, rejected: 14, canceled: 10 },
    November: { completed: 50, pending: 80, started: 30, rejected: 12, canceled: 7 },
    December: { completed: 70, pending: 90, started: 40, rejected: 15, canceled: 6 },
};



const calculateTotalAppointments = (data: { [key: string]: DayData }) => {
    return Object.keys(data).map(month => {
        const monthData = data[month];
        return Object.values(monthData).reduce((acc, val) => acc + (val || 0), 0);
    });
};

const BarChart: React.FC<StackedBarChartProps> = ({ data = defaultData }) => {
    const months = Object.keys(data).map((label: any) => label.slice(0, 3));
    const totalAppointments = calculateTotalAppointments(data);

    const chartData = {
        labels: months,
        datasets: [
            {
                label: 'Total Appointments',
                data: totalAppointments,
                backgroundColor: [
                    colorHelper.green.color,
                    colorHelper.blue.color,
                    colorHelper.yellow.color,
                ],
                borderRadius: 999,
                barPercentage: 0.5,
            }
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                }
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            ticks: {
                display: false
            }
        },
    };

    return <Bar options={options as any} data={chartData} />;
}

export default BarChart;

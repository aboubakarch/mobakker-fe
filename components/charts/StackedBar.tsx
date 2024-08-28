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

interface DayData {
    completed?: number;
    pending?: number;
    started?: number;
    rejected?: number;
    canceled?: number;
}

interface StackedBarChartProps {
    data?: {
        [key: string]: DayData;
    };
}

const defaultData: { [key: string]: DayData } = {
    Monday: { completed: 20, pending: 30, started: 10, rejected: 5, canceled: 3 },
    Tuesday: { completed: 40, pending: 50, started: 20, rejected: 10, canceled: 6 },
    Wednesday: { completed: 50, pending: 70, started: 30, rejected: 15, canceled: 9 },
    Thursday: { completed: 30, pending: 60, started: 15, rejected: 7, canceled: 4 },
    Friday: { completed: 50, pending: 80, started: 25, rejected: 12, canceled: 5 },
    Saturday: { completed: 30, pending: 90, started: 18, rejected: 9, canceled: 6 },
    Sunday: { completed: 40, pending: 60, started: 22, rejected: 11, canceled: 7 },
};

const colorMap = {
    completed: colorHelper.green.color,
    pending: colorHelper.yellow.color,
    started: colorHelper.blue.color,
    rejected: colorHelper.red.color,
    canceled: "#808080",
};

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data = defaultData }) => {
    const fullLabels = Object.keys(data) as Array<keyof typeof data>;
    const displayLabels = fullLabels.map((label: any) => label.slice(0, 3));

    const datasets = Object.keys(colorMap).map((key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        data: fullLabels.map((label) => data[label]?.[key as keyof DayData] || 0),
        backgroundColor: colorMap[key as keyof typeof colorMap],
        barPercentage: 0.3,
    }));

    const chartData = {
        labels: displayLabels,
        datasets,
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        datasets: {
            bar: {
                borderSkipped: false,
                borderRadius: {
                    topLeft: 999,
                    topRight: 999,
                    bottomLeft: 999,
                    bottomRight: 999,
                },
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                responsive: true,
                labels: {
                    font: {
                        size: 8
                    },
                },
                align: "center",
            },
            ticks: {
                display: false,
            },
        },
    };

    return <Bar options={options as any} data={chartData} />;
};

export default StackedBarChart;

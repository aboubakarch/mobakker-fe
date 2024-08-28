"use client"
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { colorHelper } from '@/lib/helpers';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// Example data
const defaultData: { [key: number]: DayData } = {
    1: { completed: 20, pending: 30, started: 10, rejected: 5, canceled: 3 },
    2: { completed: 40, pending: 50, started: 20, rejected: 10, canceled: 6 },
    3: { completed: 50, pending: 70, started: 30, rejected: 15, canceled: 9 },
    4: { completed: 30, pending: 60, started: 15, rejected: 7, canceled: 4 },
    5: { completed: 50, pending: 80, started: 25, rejected: 12, canceled: 5 },
    6: { completed: 30, pending: 90, started: 18, rejected: 9, canceled: 6 },
};

const LineChart: React.FC<StackedBarChartProps> = ({ data = defaultData }) => {
    const labels = Object.keys(data).map(day => `${day}`);

    // Extract data for each dataset
    const completedData = Object.values(data).map(d => d?.completed ?? 0);
    const pendingData = Object.values(data).map(d => d?.pending ?? 0);
    const startedData = Object.values(data).map(d => d?.started ?? 0);
    const rejectedData = Object.values(data).map(d => d?.rejected ?? 0);
    const canceledData = Object.values(data).map(d => d?.canceled ?? 0);

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
                display: true, // Show legend to distinguish datasets
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem: any) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
    };

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Completed',
                data: completedData,
                backgroundColor: colorHelper.blue.color,
                borderColor: colorHelper.blue.color,
                borderCapStyle: "round",
                borderJoinStyle: "round",
                tension: 0.5
            },
            {
                label: 'Pending',
                data: pendingData,
                backgroundColor: colorHelper.green.color,
                borderColor: colorHelper.green.color,
                borderCapStyle: "round",
                borderJoinStyle: "round",
                tension: 0.5
            },
            {
                label: 'Started',
                data: startedData,
                backgroundColor: colorHelper.yellow.color,
                borderColor: colorHelper.yellow.color,
                borderCapStyle: "round",
                borderJoinStyle: "round",
                tension: 0.5
            },
            {
                label: 'Rejected',
                data: rejectedData,
                backgroundColor: colorHelper.red.color,
                borderColor: colorHelper.red.color,
                borderCapStyle: "round",
                borderJoinStyle: "round",
                tension: 0.5
            },
            {
                label: 'Canceled',
                data: canceledData,
                backgroundColor: "#808080",
                borderColor: "#808080",
                borderCapStyle: "round",
                borderJoinStyle: "round",
                tension: 0.5
            },
        ],
    };

    return (
        <Line options={options} data={chartData as any} />
    );
}

export default LineChart;

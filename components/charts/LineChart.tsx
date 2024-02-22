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

const LineChart = () => {
    const labels = Array.from({ length: 24 }, (_, index) => index);
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
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.floor(Math.random() * 100)),
                backgroundColor: colorHelper.blue.color,
                borderColor: colorHelper.blue.color,
                borderCapStyle: "round",
                // pointRadius: 0,
                borderJoinStyle: "round",
                tension: 0.5
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.floor(Math.random() * 100)),
                backgroundColor: colorHelper.green.color,
                borderColor: colorHelper.green.color,
                borderCapStyle: "round",
                // pointRadius: 0,
                borderJoinStyle: "round",
                tension: 0.5
            },
        ],
    };

    return (
        <Line options={options} data={data as any} />
    )
}

export default LineChart
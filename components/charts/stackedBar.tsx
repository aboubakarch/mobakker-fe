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

const StackedBarChart = () => {

    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',];
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
                    bottomRight: 999
                }
            }
        },

        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                    drawBorder: false,

                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false,
                    drawBorder: false,
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

    const data = {
        labels,
        datasets: [
            {
                label: 'Progress',
                data: [20, 40, 50, 30, 50, 30, 40, 10, 40, 65, 42, 75],
                backgroundColor: [
                    colorHelper.blue.color,

                ],
                // borderRadius: 999,
                barPercentage: 0.3,

            }, {
                label: 'total Progress',
                data: [30, 50, 70, 60, 80, 90, 60, 30, 50, 75, 52, 85],
                backgroundColor: [
                    colorHelper.green.color,

                ],
                // borderRadius: 999,
                barPercentage: 0.3,

            }],
    }

    return <Bar options={options as any} data={data} />;

}

export default StackedBarChart
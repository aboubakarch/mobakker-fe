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

const BarChart = () => {

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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

    const data = {
        labels,
        datasets: [
            {
                label: 'Progress',
                data: [20, 40, 50, 30, 50, 30, 40, 10, 40, 65, 42, 75],
                backgroundColor: [
                    colorHelper.green.color,
                    colorHelper.blue.color,
                    colorHelper.yellow.color,
                    colorHelper.green.color,
                    colorHelper.blue.color,
                    colorHelper.yellow.color,
                    colorHelper.green.color,
                    colorHelper.blue.color,
                    colorHelper.yellow.color
                ],
                borderRadius: 999,
                barPercentage: 0.5,

            }],
    }

    return <Bar options={options as any} data={data} />;

}

export default BarChart
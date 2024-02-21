import React from 'react'
import { colorHelper } from "@/lib/helpers";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
    const data = {
        labels: [
            'Cancel',
            'Complete',
            'Pending'
        ],
        datasets: [{
            label: 'Total Requests',
            data: [30, 250, 100],
            backgroundColor: [
                colorHelper.red.color,
                colorHelper.blue.color,
                colorHelper.yellow.color
            ],
            borderRadius: 999,
        }],
    };
    const options = {
        cutout: "70%",
        maintainAspectRatio: false,

        plugins: {
            layout: {
                padding: 0
            },
            tooltip: {
                titleFont: {
                    size: 10
                },
                bodyFont: {
                    size: 10
                },
            },
            legend: {
                display: true,
                responsive: true,
                position: "bottom",
                labels: {
                    font: {
                        size: 8
                    },
                },
                align: "center",
            },
            label: {
                display: true
            }
        }
    }

    const labelCenter = {
        id: "labelCenter",
        beforeDraw: (chart: any) => {


            const {
                ctx,
                chartArea: { width, height }
            } = chart;
            const context = ctx.canvas.getContext("2d");
            context.save();

            const values = {
                text: "700 Total Requests",
                font: {
                    size: 13,
                    family: "sans-serif",
                    color: "black",
                    style: "normal",
                    unit: "px"
                }
            };


            context.font = `${values.font.style} ${values.font.size}${values.font.unit} ${values.font.family}`;
            context.textAlign = "center";
            context.fillStyle = values.font.color;
            context.fillText(values.text, width / 2, height / 2 + 0);
            context.restore();
        }
    };
    return (
        <Doughnut data={data} options={options as any} plugins={[labelCenter]} />
    )
}

export default DoughnutChart
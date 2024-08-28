"use client"

import React, { FC, useEffect, useState } from 'react';
import { colorHelper } from "@/lib/helpers";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    data?: {
        COMPLETED?: number;
        PENDING?: number;
        STARTED?: number;
        REJECTED?: number;
        CANCELED?: number;
    };
}

const defaultData: {
    COMPLETED?: number;
    PENDING?: number;
    STARTED?: number;
    REJECTED?: number;
    CANCELED?: number;
} = {
    COMPLETED: 30,
    PENDING: 100,
    STARTED: 50,
    REJECTED: 20,
    CANCELED: 10,
};

const DoughnutChart: FC<DoughnutChartProps> = ({ data = defaultData }) => {
    // Calculate total requests
    const [totalRequests, setTotalRequests] = useState(Object.values(data).reduce((acc, value) => acc + (value || 0), 0));

    useEffect(() => {
        setTotalRequests(Object.values(data).reduce((acc, value) => acc + (value || 0), 0))
    }, [data])

    // Prepare data for the chart
    const chartData = {
        labels: [
            'Canceled',
            'Completed',
            'Pending',
            'Started',
            'Rejected'
        ],
        datasets: [{
            label: 'Total Requests',
            data: [
                data.CANCELED || 0,
                data.COMPLETED || 0,
                data.PENDING || 0,
                data.STARTED || 0,
                data.REJECTED || 0,
            ],
            backgroundColor: [
                "#808080",
                colorHelper.blue.color,
                colorHelper.yellow.color,
                colorHelper.green.color,
                colorHelper.red.color,
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
        }
    };

    const labelCenter = (requests: number) => (
        {
            id: "labelCenter",
            beforeDraw: (chart: any) => {
                const {
                    ctx,
                    chartArea: { width, height }
                } = chart;
                const context = ctx.canvas.getContext("2d");
                context.save();

                const values = {
                    text: `Total Requests`,
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

        }
    )

    return (
        <Doughnut data={chartData} options={options as any} plugins={[labelCenter(totalRequests)]} />
    );
}

export default DoughnutChart;

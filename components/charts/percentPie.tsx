import { cleanPercentage } from "@/lib/helpers";



const Circle = ({ color, percentage }: IProgressPie) => {
    const r = 20;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - (percentage ?? 0)) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
        <circle
            r={r}
            cx={25}
            cy={25}
            fill="transparent"
            stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
            strokeWidth={"5px"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
        ></circle>
    );
};

const Text = ({ percentage, color }: IProgressPie) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            color={color}
            fontSize={"10px"}
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

export const PercentagePie = ({ percentage, color }: IProgressPie) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={"50"} height={"50"}>
            <g transform={`rotate(-90 ${"25 25"})`}>
                <Circle color="lightgrey" percentage={0} />
                <Circle color={color} percentage={pct} />
            </g>
            <Text percentage={pct} color={color} />
        </svg>
    );
};
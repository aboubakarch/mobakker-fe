interface IProgressPie {
  color: string;
  percentage: number;
}

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

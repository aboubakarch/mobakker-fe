import { ColorsEnum } from "@/constants/enums";
import moment from "moment";

export const colorHelper = {
  [ColorsEnum.Red]: { name: "primaryRed", color: "#CC4848" },
  [ColorsEnum.Yellow]: { name: "primaryYellow", color: "#F3C522" },
  [ColorsEnum.Blue]: { name: "primaryBlue", color: "#3C1EAD" },
  [ColorsEnum.Green]: { name: "primaryGreen", color: "#06AA8D" },
};

export const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

// Function to get all months in a year
export const getAllMonths = () => {
  const months = [];

  for (let month = 0; month < 12; month++) {
    const date = moment().month(month);
    months.push(date.format("MMMM"));
  }

  return months;
};

// Function to get months for the last 10 years
export const getLastNYears = (n: number) => {
  const currentYear = moment().year();
  const years = [];

  for (let year = currentYear; year > currentYear - n; year--) {
    years.push(year);
  }

  return years;
};

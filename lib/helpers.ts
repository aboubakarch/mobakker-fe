import { ColorsEnum } from "@/constants/enums";

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

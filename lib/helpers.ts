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

export function getCookie(cookieName: string) {
  // Split the document.cookie string into individual cookies
  var cookies = document.cookie.split(";");

  // Iterate over the cookies
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];

    // Trim any leading or trailing spaces
    cookie = cookie.trim();

    // Check if this cookie is the one we're looking for
    if (cookie.indexOf(cookieName + "=") === 0) {
      // If found, return the value of the cookie
      return cookie.substring(cookieName.length + 1);
    }
  }

  // If the cookie is not found, return null or an empty string
  return null;
}

export function removeCookie(cookieName: string) {
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// Function to validate image source
export function isValidImageSrc(src: string) {
  return (
    src.startsWith("/") ||
    src.startsWith("http://") ||
    src.startsWith("https://")
  );
}

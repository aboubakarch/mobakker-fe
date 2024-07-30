import { ColorsEnum } from "@/constants/enums";
import moment from "moment";
import OneSignal from "react-onesignal";

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
// Function to get a mapping of month names to their zero-based indices
export const getMonthMap = () => {
  const monthMap: { [key: string]: number } = {};

  for (let month = 0; month < 12; month++) {
    const date = moment().month(month);
    monthMap[date.format("MMMM")] = month;
  }

  return monthMap;
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

export async function runOneSignal() {
  try {
    await OneSignal.init({
      appId: `${process.env.NEXT_PUBLIC_ONESIGNAL_ID}`,
      // safari_web_id: "web.onesignal.auto.253751a8-ac24-4181-97da-883dbdadac49",
      allowLocalhostAsSecureOrigin: true,
    });
    return true;
  } catch (error) {
    return false;
  }
}

export function formatTime(time: string): string {
  if (time.endsWith(":00:00")) {
    return time.slice(0, -3);
  }
  return time;
}

export function validateCardNumber(number: string) {
  // Remove all non-digit characters
  number = number.replace(/\D/g, "");

  // Check if it passes the Luhn algorithm
  let sum = 0;
  let shouldDouble = false;

  // Loop through the digits in reverse order
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export function convertToFormData(obj: Record<string, any>): FormData {
  const formData = new FormData();

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else if (value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value);
      }
    }
  });

  return formData;
}

export function timeAgo(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const differenceInMs = now.getTime() - date.getTime();

  const minutes = Math.floor(differenceInMs / 1000 / 60);
  const hours = Math.floor(differenceInMs / 1000 / 60 / 60);
  const days = Math.floor(differenceInMs / 1000 / 60 / 60 / 24);
  const weeks = Math.floor(differenceInMs / 1000 / 60 / 60 / 24 / 7);
  const months = Math.floor(differenceInMs / 1000 / 60 / 60 / 24 / 30); // Approximation
  const years = Math.floor(differenceInMs / 1000 / 60 / 60 / 24 / 365); // Approximation

  const pluralize = (unit: number, singular: string, plural: string) => {
    return unit === 1 ? `${unit} ${singular}` : `${unit} ${plural}`;
  };

  if (minutes < 60) {
    return `${pluralize(minutes, "minute", "minutes")} ago`;
  } else if (hours < 24) {
    return `${pluralize(hours, "hour", "hours")} ago`;
  } else if (days < 7) {
    return `${pluralize(days, "day", "days")} ago`;
  } else if (weeks < 4) {
    return `${pluralize(weeks, "week", "weeks")} ago`;
  } else if (months < 12) {
    return `${pluralize(months, "month", "months")} ago`;
  } else {
    return `${pluralize(years, "year", "years")} ago`;
  }
}

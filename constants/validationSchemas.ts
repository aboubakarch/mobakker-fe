import { validateCardNumber } from "@/lib/helpers";
import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    .required("Password is required"),
});

export const branchValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),
  location: yup.string().required("Location is required"),
  // state: yup
  //   .string()
  //   .min(2, "State is required")
  //   .max(300, "State is required")
  //   .required("State is required"),
  city: yup
    .string()
    .min(2, "City is required")
    .max(300, "City is required")
    .required("City is required"),
  manager: yup.string().optional(),
  ownerId: yup.string().optional(),
});
export const serviceTypeValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),
});
export const branchEditValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    .required("Password is required"),
  location: yup.string().required("Location is required"),
  details: yup
    .string()
    .min(8, "Details must be at least 8 characters")
    .max(300, "Details cannot exceed 300 characters")
    .required("Details are required"),
});

export const employeeValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),
  jobDesc: yup
    .string()
    .max(52, "Job description cannot exceed 52 characters")
    .required("Job description is required"),
  employeeNum: yup.number().required("Employee number is required"),
  hours: yup.string().required("Hours are required"),
});
export const serviceValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must be at least 4 characters")
    .max(100, "Name cannot exceed 100 characters")
    .required("Name is required"),
  price: yup.number().required("Price is required"),
  bookingCapacity: yup.number().required("Booking Capacity is required"),
  serviceType: yup.string().required("Service type is required"),
  serviceAvailabilty: yup
    .array()
    .of(yup.string())
    .min(1, "At least one service availability is required")
    .required("Service availability is required"),
  startHour: yup.string().required("Start hour is required"),
  endHour: yup.string().required("End hour is required"),
  slotTime: yup.string().required("Slot time is required"),
  providerId: yup.string().optional(),
});
export const promotionValidationSchema = yup.object().shape({
  promoCode: yup
    .string()
    .max(100, "Promo code cannot exceed 100 characters")
    .required("Promo code is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup.date().required("End date is required"),
  service: yup.array().of(yup.string()).required("Service is required"),
  type: yup
    .string()
    .oneOf(
      ["FIXED", "PERCENTAGE"],
      "Type must be either 'FIXED' or 'PERCENTAGE'"
    )
    .required("Type is required"),
  discount: yup
    .number()
    .min(0, "Discount cannot be negative")
    .required("Discount is required")
    .test(
      "is-valid-discount",
      "For percentage type, the discount must be between 0% and 100%.",
      function (value) {
        const { type } = this.parent;
        if (type === "PERCENTAGE" && (value < 0 || value > 100)) {
          return false;
        }
        return true;
      }
    ),
  description: yup
    .string()
    .min(5, "Description cannot be less than 5 characters.")
    .max(250, "Description cannot exceed 500 characters.")
    .required("Please enter a description."),
});
export const appointmentValidationSchema = yup.object().shape({
  bookingDate: yup.date().required("Booking date is required"),
  bookingSlot: yup.string().required("Booking slot is required"),
  repeat: yup
    .string()
    .oneOf(
      ["DAILY", "WEEKLY", "MONTHLY", "YEARLY", "NONE"],
      "Repeat must be one of 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY', or 'NONE'"
    )
    .required("Repeat is required"),
  grossTotalAmount: yup.number().required("Gross total amount is required"),
  discount: yup.number().required("Discount is required"),
  netTotalAmount: yup.number().required("Net total amount is required"),
  paymentStatus: yup
    .string()
    .oneOf(
      ["PENDING", "PAID", "APPROVED"],
      "Payment status must be one of 'PENDING', 'PAID', or 'APPROVED'"
    )
    .required("Payment status is required"),
  paymentType: yup
    .string()
    .oneOf(
      ["CASH", "CARD", "TRANSFER"],
      "Payment type must be one of 'CASH', 'CARD', or 'TRANSFER'"
    )
    .required("Payment type is required"),
  status: yup
    .string()
    .oneOf(
      ["PENDING", "STARTED", "COMPLETED", "CANCELED", "REJECTED"],
      "Status must be one of 'PENDING', 'STARTED', 'COMPLETED', 'CANCELED', or 'REJECTED'"
    )
    .required("Status is required"),
  bookedBy: yup.string().required("Booked by is required"),
  branchId: yup.string().required("Branch ID is required"),
  employeeId: yup.string().required("Employee ID is required"),
  serviceId: yup.string().required("Service is required"),
});

export const providerValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name cannot exceed 100 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(100, "Last name cannot exceed 100 characters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .test("phone-validation", "Invalid phone number", function (value: any) {
      // Pakistani phone number regex pattern
      const pakistanPhoneRegex = /^\+92[0-9]{2}[0-9]{7,8}$/;
      // Saudi Arabian phone number regex pattern
      const saudiPhoneRegex = /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;

      // Check if the phone number matches either pattern
      if (pakistanPhoneRegex.test(value) || saudiPhoneRegex.test(value)) {
        return true;
      }

      return false;
    })
    .required("Phone is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    .required("Password is required"),
});

export const providerRegistrationValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name cannot exceed 100 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(100, "Last name cannot exceed 100 characters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .test("phone-validation", "Invalid phone number", function (value: any) {
      // Pakistani phone number regex pattern
      const pakistanPhoneRegex = /^\+92[0-9]{2}[0-9]{7,8}$/;
      // Saudi Arabian phone number regex pattern
      const saudiPhoneRegex = /^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/;
      // Check if the phone number matches either pattern
      if (pakistanPhoneRegex.test(value) || saudiPhoneRegex.test(value)) {
        return true;
      }

      return false;
    })
    .required("Phone is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    .required("Password is required"),
});

export const otpValidationSchema = yup.object().shape({
  pin: yup
    .string()
    .min(6, "Your one-time password must be 6 characters.")
    .required("Pin is required"),
});

export const assignServiceValidationSchema = yup.object().shape({
  services: yup
    .array()
    .of(yup.string())
    .min(1, "At least one service is required")
    .required("Service is required"),
});
export const assignBranchValidationSchema = yup.object().shape({
  branch: yup.string().required("Branch is required"),
});

export const paymentValidationSchema = yup.object().shape({
  type: yup.string().oneOf(["creditcard"]).required("Card type is required"),
  name: yup.string().required("Cardholder name is required"),
  number: yup
    .string()
    .test("card-validation", "Card number is not valid", function (value: any) {
      function isValidVisa(number: any) {
        return /^4\d{12}(\d{3})?$/.test(number) && validateCardNumber(number);
      }

      function isValidMasterCard(number: any) {
        return (
          /^(5[1-5]\d{14}|2[2-7]\d{14})$/.test(number) &&
          validateCardNumber(number)
        );
      }
      if (
        isValidVisa(value.replace(/\s+/g, "")) ||
        isValidMasterCard(value.replace(/\s+/g, ""))
      ) {
        return true;
      }

      return false;
    })
    .required("Card number is required"),
  expiry: yup
    .string()
    .matches(
      /^(0[1-9]|1[0-2])\/(2[4-9]|[3-9][0-9])$/,
      "Expiry date is not valid"
    )
    .required("Expiry date is required"),
  cvc: yup
    .string()
    .matches(/^[0-9]{3,4}$/, "CVC is not valid")
    .required("CVC is required"),
});

// // Define the main validation schema
// export const paymentValidationSchema = yup.object().shape({
//   subscriptionId: yup
//     .string()
//     .uuid("Invalid subscription ID")
//     .required("Subscription ID is required"),
//   source: cardSchema.required("Credit card information is required"),
// });

export const countryValidationSchema = yup.object().shape({
  name: yup.string().required("Country name is required"),
  code: yup.string().required("Country code is required"),
  mobileCode: yup.string().required("Mobile code is required"),
});

export const stateValidationSchema = yup.object().shape({
  name: yup.string().required("State name is required"),
  code: yup.string().required("State code is required"),
  countryId: yup
    .string()
    .uuid("Invalid country ID")
    .required("Country ID is required"),
});

export const cityValidationSchema = yup.object().shape({
  name: yup.string().required("City name is required"),
  code: yup.string().required("City code is required"),
  stateId: yup
    .string()
    .uuid("Invalid state ID")
    .required("State ID is required"),
});
export const sendNotificationValidationSchema = yup.object().shape({
  heading: yup
    .string()
    .min(3, "Heading Must be greater than three letters")
    .required("Heading is Required"),
  notification: yup
    .string()
    .min(3, "Heading Must be greater than three letters")
    .required("City code is required"),
});

export const ratingValidationSchema = yup.object().shape({
  rating: yup
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5")
    .required("Rating is required"),
  comment: yup
    .string()
    .min(3, "Comment must be greater than three letters")
    .required("Comment is required"),
});
export const cancelAppointmentValidationSchema = yup.object().shape({
  reason: yup
    .string()
    .min(3, "Reason must be greater than three letters")
    .required("Cancellation Reason is required"),
});

export const loyaltyProgramValidationSchema = yup.object().shape({
  branch: yup.string().required("Branch is required"),
  rating: yup
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at most 5")
    .required("Rating is required"),
  noOfBooking: yup.number().required("Booking Capacity is required"),
});

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
  state: yup
    .string()
    .min(2, "State is required")
    .max(300, "State is required")
    .required("State is required"),
  city: yup
    .string()
    .min(2, "City is required")
    .max(300, "City is required")
    .required("City is required"),
  manager: yup.string().optional(),
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
  serviceType: yup.string().required("Service type is required"),
  serviceAvailabilty: yup
    .array()
    .of(yup.string())
    .min(1, "At least one service availability is required")
    .required("Service availability is required"),
  startHour: yup.string().required("Start hour is required"),
  endHour: yup.string().required("End hour is required"),
  slotTime: yup.string().required("Slot time is required"),
});
export const promotionValidationSchema = yup.object().shape({
  promoCode: yup
    .string()
    .max(100, "Promo code cannot exceed 100 characters")
    .required("Promo code is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup.date().required("End date is required"),
  service: yup.array().of(yup.string()).required("Service is required"),
  isActive: yup.boolean().required("Active status is required"),
  type: yup
    .string()
    .oneOf(
      ["FIXED", "PERCENTAGE"],
      "Type must be either 'FIXED' or 'PERCENTAGE'"
    )
    .required("Type is required"),
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
  service: yup.string().required("Service is required"),
});

export const providerValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(4, "First name must be at least 4 characters")
    .max(100, "First name cannot exceed 100 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(4, "Last name must be at least 4 characters")
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
      const saudiPhoneRegex = /^\+966[1-9][0-9]{7}$/;

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
    .min(4, "First name must be at least 4 characters")
    .max(100, "First name cannot exceed 100 characters")
    .required("First name is required"),
  lastName: yup
    .string()
    .min(4, "Last name must be at least 4 characters")
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
      const saudiPhoneRegex = /^\+966[1-9][0-9]{7}$/;

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

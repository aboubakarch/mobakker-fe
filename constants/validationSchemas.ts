import * as yup from "yup";
export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    .required(),
  password: yup.string().min(8).max(32).required(),
});
export const branchValidationSchema = yup.object().shape({
  name: yup.string().min(4).max(100).required(),
  location: yup.string().required(),
  state: yup.string().min(2).max(300).required(),
  city: yup.string().min(2).max(300).required(),
  manager: yup.string().optional(),
});
export const serviceTypeValidationSchema = yup.object().shape({
  name: yup.string().min(4).max(100).required(),
});
export const branchEditValidationSchema = yup.object().shape({
  name: yup.string().min(4).max(100).required(),
  password: yup.string().min(8).max(32).required(),
  location: yup.string().required(),
  details: yup.string().min(8).max(300).required(),
});
export const employeeValidationSchema = yup.object().shape({
  name: yup.string().min(4).max(100).required(),
  jobDesc: yup.string().max(52).required(),
  employeeNum: yup.number().required(),
  hours: yup.string().required(),
});

export const serviceValidationSchema = yup.object().shape({
  name: yup.string().min(4).max(100).required(),
  price: yup.number().required(),
  serviceType: yup.string().required(),
  serviceAvailabilty: yup.array().of(yup.string()).required(),
  startHour: yup.string().required(),
  endHour: yup.string().required(),
  slotTime: yup.string().required(),
});
export const promotionValidationSchema = yup.object().shape({
  promoCode: yup.string().max(100).required(),
  startDate: yup.date().required(),
  endDate: yup.date().required(),
  service: yup.array().of(yup.string()).required(),
  isActive: yup.boolean().required(),
  type: yup.string().oneOf(["FIXED", "PERCENTAGE"]).required(),
});
export const appointmentValidationSchema = yup.object().shape({
  bookingDate: yup.date().required(),
  repeat: yup
    .string()
    .oneOf(["DAILY", "WEEKLY", "MONTHLY", "YEARLY", "NEVER"])
    .required(),
  grossTotalAmount: yup.number().required(),
  discount: yup.number().required(),
  netTotalAmount: yup.number().required(),
  paymentStatus: yup.string().oneOf(["PENDING", "PAID", "APPROVED"]).required(),
  paymentType: yup.string().oneOf(["CASH", "CARD", "TRANSFER"]).required(),
  status: yup
    .string()
    .oneOf(["PENDING", "STARTED", "COMPLETED", "CANCELED", "REJECTED"])
    .required(),
  bookedBy: yup.string().required(),
  branchId: yup.string().required(),
  employeeId: yup.string().required(),
  service: yup.string().required(),
  timing: yup.string().required(),
});
export const providerValidationSchema = yup.object().shape({
  firstName: yup.string().min(4).max(100).required(),
  lastName: yup.string().min(4).max(100).required(),
  email: yup.string().email().required(),
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
    .required(),
  password: yup.string().min(8).max(32).required(),
});

export const providerRegistrationValidationSchema = yup.object().shape({
  firstName: yup.string().min(4).max(100).required(),
  lastName: yup.string().min(4).max(100).required(),
  email: yup.string().email().required(),
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
    .required(),
  password: yup.string().min(8).max(32).required(),
});

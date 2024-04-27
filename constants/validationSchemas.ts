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
  password: yup.string().min(8).max(32).required(),
  location: yup.string().required(),
  details: yup.string().min(8).max(300).required(),
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
  employees: yup.array().of(yup.string()).required(),
  price: yup.number().required(),
  serviceType: yup.string().required(),
  serviceAvailabilty: yup.array().of(yup.string()).required(),
  startHour: yup.number().required(),
  endHour: yup.number().required(),
});
export const promotionValidationSchema = yup.object().shape({
  name: yup.string().max(100).required(),
  employees: yup.array().of(yup.string()).required(),
  category: yup.string().max(100).required(),
  capacity: yup.string().max(100).required(),
  date: yup.date().required(),
  time: yup.date().required(),
  status: yup.string().max(100).required(),
});
export const appointmentValidationSchema = yup.object().shape({
  employees: yup.array().of(yup.string()).required(),
  category: yup.string().max(100).required(),
  paymentType: yup.string().max(100).required(),
  service: yup.string().max(100).required(),
  date: yup.date().required(),
  hours: yup.array().of(yup.string()).required(),
  repeatDay: yup.boolean().required(),
  repeatWeek: yup.boolean().required(),
  repeatMonth: yup.boolean().required(),
});
export const providerValidationSchema = yup.object().shape({
  firstName: yup.string().min(4).max(100).required(),
  lastName: yup.string().min(4).max(100).required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .test("phone-validation", "Invalid phone number", function (value: any) {
      // Pakistani phone number regex pattern
      const pakistanPhoneRegex = /^\+92[0-9]{2}-[0-9]{7,8}$/;
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
  details: yup.string().min(8).max(300).required(),
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

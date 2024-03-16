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
export const providerValidationSchema = yup.object().shape({
  name: yup.string().min(4).max(100).required(),
  password: yup.string().min(8).max(32).required(),
  details: yup.string().min(8).max(300).required(),
});

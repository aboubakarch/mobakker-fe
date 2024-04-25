import {
  IAppointmentFormValues,
  IBranchEditFormValues,
  IBranchFormValues,
  IEmployeeFormValues,
  IFormValueObj,
  ILoginFormValues,
  IPromotionFormValues,
  IProviderFormValues,
  IServiceFormValues,
} from "@/@types/forms";
import {
  appointmentValidationSchema,
  branchEditValidationSchema,
  branchValidationSchema,
  employeeValidationSchema,
  loginValidationSchema,
  promotionValidationSchema,
  providerValidationSchema,
  serviceValidationSchema,
} from "./validationSchemas";
import { formConstants } from "./constants";
import { FieldTypesEnum } from "./enums";

export const loginDefaultValues: ILoginFormValues = {
  email: "",
  password: "",
};
export const branchDefaultValues: (val?: SampleBranch) => IBranchFormValues = (
  val
) => ({
  name: val ? val.name : "",
  password: val ? val.password : "",
  state: val ? val.state : "",
  city: val ? val.city : "",
  location: val ? val.location : "",
});
export const branchEditDefaultValues: IBranchEditFormValues = {
  name: "",
  details: "",
  location: "",
};
export const providerDefaultValues: (
  val?: SampleProvider
) => IProviderFormValues = (val) => ({
  firstName: val ? val.firstName : "",
  lastName: val ? val.lastName : "",
  email: val ? val.email : "",
  phone: val ? val.phone : "",
  password: val ? val.password : "",
  details: val ? val.description : "",
});
export const employeeDefaultValues: IEmployeeFormValues = {
  name: "",
  hours: "",
  employeeNum: "",
  jobDesc: "",
};
export const serviceDefaultValues: IServiceFormValues = {
  name: "",
  employees: [],
  price: "",
  serviceType: "",
  serviceAvailabilty: [],
  startHour: "",
  endHour: "",
};
export const promotionDefaultValues: IPromotionFormValues = {
  name: "",
  employees: [],
  category: "",
  capacity: "",
  date: "",
  time: "",
  status: "",
};
export const appointmentDefaultValues: (
  val?: SampleAppointments
) => IAppointmentFormValues = (val) => ({
  employees: val ? val.employees : [],
  category: val ? val.category : "",
  service: val ? val.serviceBooked : "",
  date: val ? val.date : "",
  paymentType: val ? val.paymentType : "",
  hours: val ? val.hours : [],
  repeatDay: val ? val.repeatDay : false,
  repeatWeek: val ? val.repeatWeek : false,
  repeatMonth: val ? val.repeatMonth : false,
});

export const loginFormVals: IFormValueObj<ILoginFormValues> = {
  validationSchema: loginValidationSchema,
  initialValues: loginDefaultValues,
  info: (t) => ({
    email: {
      placeHolder: t(formConstants.EMAIL_PLACEHOLDER),
      hasError: false,
      name: "email",
      label: t(formConstants.EMAIL_LABEL),
      type: "email",
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_LABEL),
      type: "password",
    },
  }),
};
export const branchFormVals: (
  val?: SampleBranch
) => IFormValueObj<IBranchFormValues> = (val) => ({
  validationSchema: branchValidationSchema,
  initialValues: branchDefaultValues(val),
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.BRANCH_NAME_LABEL),
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_PLACEHOLDER),
    },
    location: {
      placeHolder: t(formConstants.LOCATION),
      hasError: false,
      name: "location",
      label: t(formConstants.LOCATION),
    },
    state: {
      placeHolder: t(formConstants.STATE),
      hasError: false,
      name: "state",
      label: t(formConstants.STATE),
      fieldType: FieldTypesEnum.Select,
    },
    city: {
      placeHolder: t(formConstants.CITY),
      hasError: false,
      name: "city",
      label: t(formConstants.CITY),
      fieldType: FieldTypesEnum.Select,
    },
  }),
});
export const branchEditFormVals: IFormValueObj<IBranchEditFormValues> = {
  validationSchema: branchEditValidationSchema,
  initialValues: branchEditDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.BRANCH_NAME_LABEL),
    },

    location: {
      placeHolder: t(formConstants.LOCATION),
      hasError: false,
      name: "location",
      label: t(formConstants.LOCATION),
    },
    details: {
      placeHolder: t(formConstants.DETAILS),
      hasError: false,
      name: "details",
      label: t(formConstants.DETAILS),
      fieldType: FieldTypesEnum.Textarea,
    },
  }),
};
export const employeeFormVals: IFormValueObj<IEmployeeFormValues> = {
  validationSchema: employeeValidationSchema,
  initialValues: employeeDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.EMPLOYEE_NAME),
    },
    employeeNum: {
      placeHolder: t(formConstants.EMPLOYEE_NUM),
      hasError: false,
      name: "employeeNum",
      label: t(formConstants.EMPLOYEE_NUM),
    },
    hours: {
      placeHolder: t(formConstants.HOURS),
      hasError: false,
      name: "hours",
      label: t(formConstants.WORKING_HOURS),
      fieldType: FieldTypesEnum.Select,
    },
    jobDesc: {
      placeHolder: t(formConstants.JOB_DESC),
      hasError: false,
      name: "jobDesc",
      label: t(formConstants.DESC),
    },
  }),
};

export const providerFormVals: (
  val?: SampleProvider
) => IFormValueObj<IProviderFormValues> = (val) => ({
  validationSchema: providerValidationSchema,
  initialValues: providerDefaultValues(val),
  info: (t) => ({
    firstName: {
      placeHolder: t(formConstants.FIRST_NAME),
      hasError: false,
      name: "firstName",
      label: t(formConstants.FIRST_NAME),
    },
    lastName: {
      placeHolder: t(formConstants.LAST_NAME),
      hasError: false,
      name: "lastName",
      label: t(formConstants.LAST_NAME),
    },
    email: {
      placeHolder: t(formConstants.EMAIL_PLACEHOLDER),
      hasError: false,
      name: "email",
      label: t(formConstants.EMAIL_LABEL),
    },
    phone: {
      placeHolder: t("+966 *******"),
      hasError: false,
      name: "phone",
      label: t(formConstants.PHONE),
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_PLACEHOLDER),
      type: "password",
    },
    details: {
      placeHolder: t(formConstants.DETAILS),
      hasError: false,
      name: "details",
      label: t(formConstants.ABOUT_PROVIDER),
      fieldType: FieldTypesEnum.Textarea,
    },
  }),
});

export const serviceFormVals: IFormValueObj<IServiceFormValues> = {
  validationSchema: serviceValidationSchema,
  initialValues: serviceDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.SERVICE_NAME),
    },
    price: {
      placeHolder: t(formConstants.PRICE),
      hasError: false,
      name: "price",
      label: t(formConstants.PRICE),
    },
    employees: {
      hasError: false,
      name: "employees",
      label: t(formConstants.SELECT_EMPLOYEES),
      fieldType: FieldTypesEnum.EmployeeSelect,
    },
    serviceAvailabilty: {
      hasError: false,
      name: "serviceAvailabilty",
      label: t(formConstants.SERVICE_AVAILABILITY),
      fieldType: FieldTypesEnum.DaysRadio,
    },
    endHour: {
      placeHolder: t(formConstants.TO),
      hasError: false,
      name: "endHour",
      // label: t(formConstants.WORKING_HOURS),
      fieldType: FieldTypesEnum.Select,
    },
    startHour: {
      placeHolder: t(formConstants.FROM),
      hasError: false,
      name: "startHour",
      label: t(formConstants.WORKING_HOURS),
      fieldType: FieldTypesEnum.Select,
    },
    serviceType: {
      placeHolder: t(formConstants.TYPE_OF_SERVICE),
      hasError: false,
      name: "serviceType",
      label: t(formConstants.TYPE_OF_SERVICE),
      fieldType: FieldTypesEnum.Select,
    },
  }),
};
export const promotionFormVals: IFormValueObj<IPromotionFormValues> = {
  validationSchema: promotionValidationSchema,
  initialValues: promotionDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.PROMOTION_NAME),
    },
    employees: {
      hasError: false,
      name: "employees",
      label: t(formConstants.SELECT_EMPLOYEES),
      fieldType: FieldTypesEnum.EmployeeSelect,
    },
    category: {
      placeHolder: t(formConstants.CATEGORY),
      hasError: false,
      name: "category",
      label: t(formConstants.SELECT_CATEGORY),
      fieldType: FieldTypesEnum.Select,
    },
    capacity: {
      placeHolder: t(formConstants.CAPACITY),
      hasError: false,
      name: "capacity",
      label: t(formConstants.CAPACITY),
    },
    date: {
      placeHolder: t(formConstants.DATE),
      hasError: false,
      name: "date",
      label: t(formConstants.SELECT_DATE),
      fieldType: FieldTypesEnum.DatePicker,
    },
    time: {
      placeHolder: t(formConstants.SELECT_TIME),
      hasError: false,
      name: "time",
      label: t(formConstants.SELECT_TIME),
      fieldType: FieldTypesEnum.DatePicker,
    },
    status: {
      placeHolder: t(formConstants.STATUS),
      hasError: false,
      name: "status",
      label: t(formConstants.STATUS),
      fieldType: FieldTypesEnum.Select,
    },
  }),
};
export const appointmentFormVals: (
  val?: SampleAppointments
) => IFormValueObj<IAppointmentFormValues> = (val) => ({
  validationSchema: appointmentValidationSchema,
  initialValues: appointmentDefaultValues(val),
  info: (t) => ({
    employees: {
      hasError: false,
      name: "employees",
      label: t(formConstants.SELECT_EMPLOYEES),
      fieldType: FieldTypesEnum.EmployeeSelect,
    },
    category: {
      placeHolder: t(formConstants.CATEGORY),
      hasError: false,
      name: "category",
      label: t(formConstants.SELECT_CATEGORY),
      fieldType: FieldTypesEnum.Select,
    },
    paymentType: {
      placeHolder: t(formConstants.PAYMENT_TYPE),
      hasError: false,
      name: "paymentType",
      label: t(formConstants.PAYMENT_TYPE),
      fieldType: FieldTypesEnum.Select,
    },
    service: {
      placeHolder: t(formConstants.SELECT_SERVICE),
      hasError: false,
      name: "service",
      label: t(formConstants.SELECT_SERVICE),
      fieldType: FieldTypesEnum.Select,
    },
    date: {
      placeHolder: t(formConstants.DATE),
      hasError: false,
      name: "date",
      label: t(formConstants.SELECT_DATE),
      fieldType: FieldTypesEnum.DatePicker,
    },
    hours: {
      hasError: false,
      name: "hours",
      label: t(formConstants.SELECT_APPOINTMENT_TIME),
      fieldType: FieldTypesEnum.HoursCheck,
    },
    repeatDay: {
      hasError: false,
      name: "repeatDay",
      label: t(formConstants.REPEAT_FOR_DAY),
      fieldType: FieldTypesEnum.Checkbox,
    },
    repeatWeek: {
      hasError: false,
      name: "repeatWeek",
      label: t(formConstants.REPEAT_FOR_WEEK),
      fieldType: FieldTypesEnum.Checkbox,
    },
    repeatMonth: {
      hasError: false,
      name: "repeatMonth",
      label: t(formConstants.REPEAT_FOR_MONTH),
      fieldType: FieldTypesEnum.Checkbox,
    },
  }),
});

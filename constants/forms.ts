import {
  IBranchFormValues,
  IEmployeeFormValues,
  IFormValueObj,
  ILoginFormValues,
  IPromotionFormValues,
  IProviderFormValues,
  IServiceFormValues,
} from "@/@types/forms";
import {
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
export const branchDefaultValues: IBranchFormValues = {
  name: "",
  password: "",
  details: "",
  location: "",
};
export const providerDefaultValues: IProviderFormValues = {
  name: "",
  password: "",
  details: "",
};
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

export const loginFormVals: IFormValueObj<ILoginFormValues> = {
  validationSchema: loginValidationSchema,
  initialValues: loginDefaultValues,
  info: (t) => ({
    email: {
      placeHolder: t(formConstants.EMAIL_PLACEHOLDER),
      hasError: false,
      name: "email",
      label: t(formConstants.EMAIL_LABEL),
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_LABEL),
    },
  }),
};
export const branchFormVals: IFormValueObj<IBranchFormValues> = {
  validationSchema: branchValidationSchema,
  initialValues: branchDefaultValues,
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
    details: {
      placeHolder: t(formConstants.DETAILS),
      hasError: false,
      name: "details",
      label: t(formConstants.DETAILS),
      type: FieldTypesEnum.Textarea,
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
      type: FieldTypesEnum.Select,
    },
    jobDesc: {
      placeHolder: t(formConstants.JOB_DESC),
      hasError: false,
      name: "jobDesc",
      label: t(formConstants.DESC),
    },
  }),
};

export const providerFormVals: IFormValueObj<IProviderFormValues> = {
  validationSchema: providerValidationSchema,
  initialValues: providerDefaultValues,
  info: (t) => ({
    name: {
      placeHolder: t(formConstants.NAME_PLACEHOLER),
      hasError: false,
      name: "name",
      label: t(formConstants.PROVIDER_NAME),
    },
    password: {
      placeHolder: t(formConstants.PASS_PLACEHOLDER),
      hasError: false,
      name: "password",
      label: t(formConstants.PASS_PLACEHOLDER),
    },
    details: {
      placeHolder: t(formConstants.DETAILS),
      hasError: false,
      name: "details",
      label: t(formConstants.ABOUT_PROVIDER),
      type: FieldTypesEnum.Textarea,
    },
  }),
};

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
      type: FieldTypesEnum.EmployeeSelect,
    },
    serviceAvailabilty: {
      hasError: false,
      name: "serviceAvailabilty",
      label: t(formConstants.SERVICE_AVAILABILITY),
      type: FieldTypesEnum.DaysRadio,
    },
    endHour: {
      placeHolder: t(formConstants.TO),
      hasError: false,
      name: "endHour",
      // label: t(formConstants.WORKING_HOURS),
      type: FieldTypesEnum.Select,
    },
    startHour: {
      placeHolder: t(formConstants.FROM),
      hasError: false,
      name: "startHour",
      label: t(formConstants.WORKING_HOURS),
      type: FieldTypesEnum.Select,
    },
    serviceType: {
      placeHolder: t(formConstants.TYPE_OF_SERVICE),
      hasError: false,
      name: "serviceType",
      label: t(formConstants.TYPE_OF_SERVICE),
      type: FieldTypesEnum.Select,
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
      type: FieldTypesEnum.EmployeeSelect,
    },
    category: {
      placeHolder: t(formConstants.CATEGORY),
      hasError: false,
      name: "category",
      label: t(formConstants.SELECT_CATEGORY),
      type: FieldTypesEnum.Select,
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
      type: FieldTypesEnum.DatePicker,
    },
    time: {
      placeHolder: t(formConstants.SELECT_TIME),
      hasError: false,
      name: "time",
      label: t(formConstants.SELECT_TIME),
      type: FieldTypesEnum.DatePicker,
    },
    status: {
      placeHolder: t(formConstants.STATUS),
      hasError: false,
      name: "status",
      label: t(formConstants.STATUS),
      type: FieldTypesEnum.Select,
    },
  }),
};

import {
  IBranchFormValues,
  IEmployeeFormValues,
  IFormValueObj,
  ILoginFormValues,
  IProviderFormValues,
  IServiceFormValues,
} from "@/@types/forms";
import {
  branchValidationSchema,
  employeeValidationSchema,
  loginValidationSchema,
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
  hours: "",
  employees: [],
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
      label: t(formConstants.EMPLOYEE_NAME),
    },
    hours: {
      placeHolder: t(formConstants.HOURS),
      hasError: false,
      name: "hours",
      label: t(formConstants.WORKING_HOURS),
      type: FieldTypesEnum.Select,
    },
    employees: {
      placeHolder: t(formConstants.JOB_DESC),
      hasError: false,
      name: "employees",
      label: t(formConstants.DESC),
      type: FieldTypesEnum.EmployeeSelect,
    },
  }),
};

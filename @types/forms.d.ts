import { FieldTypesEnum } from "@/constants/enums";
import { ReactNode } from "react";
import * as yup from "yup";

interface ILoginFormValues {
  email: string;
  password: string;
}
interface IBranchFormValues {
  name: string;
  password: string;
  location: string;
  state: string;
  city: string;
}
interface IBranchEditFormValues {
  name: string;
  location: string;
  details: string;
}
interface IProviderFormValues {
  name: string;
  password: string;
  details: string;
}
interface IEmployeeFormValues {
  name: string;
  hours: string;
  employeeNum: string;
  jobDesc: string;
}
interface IServiceFormValues {
  name: string;
  employees: string[];
  price: string;
  serviceType: string;
  serviceAvailabilty: string[];
  startHour: string;
  endHour: string;
}
interface IPromotionFormValues {
  name: string;
  employees: string[];
  category: string;
  capacity: string;
  date: string;
  time: string;
  status: string;
}
interface IAppointmentFormValues {
  employees: string[];
  category: string;
  service: string;
  date: string;
  hours: string[];
  paymentType: string;
  repeatDay: boolean;
  repeatWeek: boolean;
  repeatMonth: boolean;
}

type IFormTemplate = IAppFormProps;

interface IAppFormProps<T> {
  validationSchema:
    | yup.ObjectSchema<T, yup.AnyObject, any, string | "d" | "s" | "">
    | Lazy<any, AnyObject, any>;
  initialValues: T;
  onSubmit: (values: any) => void;
  children?: ReactNode | ReactNode[];
  className?: string;
}

interface IFormField {
  name: string;
  placeHolder?: string;
  label?: string;
  hasError: boolean;
  desc?: string;
  type?: FieldTypesEnum;
  disabled?: boolean;
  data?: {
    name: string | number;
    value: string | number;
  }[];
}

interface IFormValueObj<T> {
  validationSchema:
    | yup.ObjectSchema<T, yup.AnyObject, any, string | "d" | "s" | "">
    | Lazy<any, AnyObject, any>;
  initialValues: T;
  info: (t: TFunction<"translation", undefined>) => {
    [key in keyof T]: IFormField;
  };
}

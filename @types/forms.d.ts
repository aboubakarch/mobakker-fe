import { FieldTypesEnum } from "@/constants/enums";
import { ReactNode } from "react";
import * as yup from "yup";

interface ILoginFormValues {
  email: string;
  password: string;
}
interface IProviderRegistrationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
interface IBranchFormValues {
  name: string;
  location: string;
  state: string;
  city: string;
  manager?: string;
}
interface IServiceTypeFormValues {
  name: string;
}
interface IBranchEditFormValues {
  name: string;
  location: string;
  details: string;
}
interface IProviderFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
interface IEmployeeFormValues {
  name: string;
  hours: string;
  employeeNum: string;
  jobDesc: string;
}
interface IServiceFormValues {
  name: string;
  price: number;
  serviceType: string;
  serviceAvailabilty: string[];
  startHour: string;
  endHour: string;
  slotTime: string;
}
interface IPromotionFormValues {
  promoCode: string;
  startDate: Date | string;
  endDate: Date | string;
  service: string[];
  isActive: boolean;
  type: "FIXED" | "PERCENTAGE";
  description: string;
}
interface IAppointmentFormValues {
  bookingDate: Date;
  repeat: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | "NONE";
  grossTotalAmount: number;
  discount: number;
  netTotalAmount: number;
  paymentStatus: "PENDING" | "PAID" | "APPROVED";
  paymentType: "CASH" | "CARD" | "TRANSFER";
  status: "PENDING" | "STARTED" | "COMPLETED" | "CANCELED" | "REJECTED";
  bookedBy: string;
  branchId: string;
  employeeId: string;
  service: string;
  bookingSlot: string;
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
  fieldType?: FieldTypesEnum;
  type?: string;
  disabled?: boolean;
  data?: {
    name: string | number;
    value: string | number;
  }[];
  times?: string[];
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

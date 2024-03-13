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
  details: string;
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

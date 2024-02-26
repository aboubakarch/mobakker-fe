import { ReactNode } from 'react';
import * as yup from 'yup';

interface ILoginFormValues {
  email: string;
  password: string;
}

type IFormTemplate = IAppFormProps;

interface IAppFormProps<T> {
  validationSchema:
    | yup.ObjectSchema<T, yup.AnyObject, any, string | 'd' | 's' | ''>
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
}

interface IFormValueObj<T> {
  validationSchema:
    | yup.ObjectSchema<T, yup.AnyObject, any, string | 'd' | 's' | ''>
    | Lazy<any, AnyObject, any>;
  initialValues: T;
  info: {
    [key in keyof T]: IFormField;
  };
}

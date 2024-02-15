import { IFormValueObj, ILoginFormValues } from "@/@types/forms";
import { loginValidationSchema } from "./validationSchemas";

export const loginDefaultValues: ILoginFormValues = {
  username: "",
  password: "",
};
export const loginFormVals: IFormValueObj<ILoginFormValues> = {
  validationSchema: loginValidationSchema,
  initialValues: loginDefaultValues,
  info: {
    username: {
      placeHolder: "Username",
      hasError: false,
      name: "username",
    },
    password: {
      placeHolder: "Password",
      hasError: false,
      name: "password",
    },
  },
};

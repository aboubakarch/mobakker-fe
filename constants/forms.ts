import { IFormValueObj, ILoginFormValues } from "@/@types/forms";
import { loginValidationSchema } from "./validationSchemas";
import { formConstants } from "./constants";

export const loginDefaultValues: ILoginFormValues = {
  email: "",
  password: "",
};
export const loginFormVals: IFormValueObj<ILoginFormValues> = {
  validationSchema: loginValidationSchema,
  initialValues: loginDefaultValues,
  info: {
    email: {
      placeHolder: formConstants.EMAIL_PLACEHOLDER,
      hasError: false,
      name: formConstants.EMAIL,
      label: formConstants.EMAIL_LABEL,
    },
    password: {
      placeHolder: formConstants.PASS_PLACEHOLDER,
      hasError: false,
      name: formConstants.PASS,
      label: formConstants.PASS_LABEL,
    },
  },
};

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

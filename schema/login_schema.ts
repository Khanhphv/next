import * as yup from "yup";
export const login_schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

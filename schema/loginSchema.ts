import * as yup from "yup";
export const loginSchema = yup
  .object({
    username: yup.string().email("Invalid email format").required(),
    password: yup.string().required(),
  })
  .required();

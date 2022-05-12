import { Box, TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type HTextFieldProps = TextFieldProps & {
  control: any;
  name: string;
  label: string;
  error?: string;
};

export const Field = (props: any) => {
  const { name } = props;
  const { register } = useFormContext(); // retrieve all hook methods
  return <TextField {...register(name)} {...props} />;
};

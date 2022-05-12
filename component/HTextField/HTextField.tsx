import { Box, TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type HTextFieldProps = TextFieldProps & {
  control: any;
  name: string;
  label: string;
  error?: string;
};

export const HTextField = (props: any) => {
  const { name } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods
  console.log(errors[name]);
  return (
    <TextField
      error={!!errors?.[name]}
      helperText={errors?.[name]?.message || ""}
      {...register(name)}
      {...props}
    />
  );
};;

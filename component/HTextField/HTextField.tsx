import { Box, TextField, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";

type HTextFieldProps = {
  control: any;
  name: string;
  label: string;
  error?: string;
};

const CustomTextField = ({
  error,
  label,
  value,
  variant,
  ...otherProps
}: any) => {
  console.log("error", error);
  return (
    <Box>
      <TextField
        error={!!error}
        variant={variant}
        label={label}
        {...otherProps}
        helperText={!!error ? error?.message : ""}
      />
      {/* {error && (
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      )} */}
    </Box>
  );
};

export const HTextField = (props: HTextFieldProps) => {
  const { control, name, label, ...otherProps } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <CustomTextField
          error={error}
          label={label}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};

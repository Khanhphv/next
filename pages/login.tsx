import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  IconButton,
  InputAdornment,
  Grid,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import type { NextPage } from "next";
import { useState } from "react";
import "../styles/Login.module.scss";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { string } from "yup/lib/locale";
import { login_schema } from "../schema/login_schema";
import { HTextField } from "../component/HTextField/HTextField";

interface State {
  password: string;
  showPassword: boolean;
}

type FieldValues = {
  username: string;
  password: string;
};
const Login: NextPage = () => {
  const [values, setValues] = useState<State>({
    password: "",
    showPassword: false,
  });

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(login_schema),
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit: any = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Grid
      container
      className="login-form"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      sx={{ pt: 2 }}
    >
      <Image
        src={"https://zcheats.com/img/transparent-logo.png"}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <FormControl sx={{ mb: 1, width: "80%", maxWidth: "300px", mt: 4 }}>
        <HTextField control={control} name="username" label={"Username"} />
      </FormControl>

      {/* <FormControl
        sx={{ mb: 1, width: "80%", maxWidth: "300px" }}
        variant="outlined"
      >
        <InputLabel
          {...register("password", { required: true })}
          htmlFor="outlined-adornment-password"
        >
          Password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl> */}
      <Button
        sx={{ mt: 2, width: "80%", maxWidth: "300px" }}
        variant="contained"
        type="submit"
      >
        Login
      </Button>
    </Grid>
  );
};

export default Login;
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

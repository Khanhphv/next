import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { HTextField } from "../component/HTextField/HTextField";
import { login_schema } from "../schema/login_schema";
import { HForm } from "../component/HForm/HForm";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const form = useForm({
    resolver: yupResolver(login_schema),
  });
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;
  console.log(errors);

  const handleChange = (e: any) => {
    setValues({ ...values, password: e.target.value });
  };
  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <HForm schema={login_schema} onSubmit={onSubmit}>
      <Grid
        container
        component="div"
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
          <HTextField name="username" label={"Username"} />
        </FormControl>

        <FormControl
          sx={{ mb: 1, width: "80%", maxWidth: "300px" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            {...register("password")}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          sx={{ mt: 2, width: "80%", maxWidth: "300px" }}
          variant="contained"
          type="submit"
        >
          Login
        </Button>
      </Grid>
    </HForm>
  );
}

export default Login;
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

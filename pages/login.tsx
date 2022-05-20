import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { HTextField } from "../component/HTextField";
import { HForm } from "../component/HForm";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginSchema } from "../schema";
import Link from "next/link";
import Lottie from "lottie-react";
import google from "../lottie/google.json";
import discord from "../lottie/discord.json";
function Login() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (e: any) => {
    setValues({ ...values, password: e.target.value });
  };
  const onSubmit = (data) => {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <HForm schema={loginSchema} onSubmit={onSubmit}>
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
        <Grid
          container
          component="div"
          direction="column"
          alignItems="center"
          sx={{ width: "90%" }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography textAlign={"center"} variant="h3" component="h2">
              Login
            </Typography>
            <FormControl sx={{ mb: 1, width: "100%", mt: 4 }}>
              <HTextField name="username" label={"Username"} />
            </FormControl>
            <FormControl sx={{ mb: 1, width: "100%" }} variant="outlined">
              <HTextField
                name="password"
                label={"Password"}
                type={values.showPassword ? "password" : "text"}
                InputProps={{
                  disableUnderline: false,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Link href="/forgot">Forgot?</Link>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <Button
              sx={{ mt: 2, width: "100%" }}
              variant="outlined"
              type="submit"
            >
              Login
            </Button>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography textAlign={"center"} mt={5} mb={2}>
              Or continue with
            </Typography>
            <Box>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 2, sm: 2, md: 3 }}
              >
                <Grid item xs={6} md={6} lg={6}>
                  <Button sx={{ width: "100%" }} variant="outlined">
                    <Lottie
                      style={{ height: "30px", width: "30px" }}
                      animationData={google}
                      loop
                    />
                    <Typography>Google</Typography>
                  </Button>
                </Grid>
                <Grid item md={6} xs={6} lg={6}>
                  <Button sx={{ width: "100%" }} variant="outlined">
                    <Lottie
                      style={{ height: "30px", width: "30px" }}
                      animationData={discord}
                      loop
                    />
                    <Typography>Discord</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Box>

            <Box>
              <Typography textAlign={"center"} mt={4}>
                Don't have account?
                <Link href="/home">
                  <Typography ml={1} component="label">
                    Create account
                  </Typography>
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
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

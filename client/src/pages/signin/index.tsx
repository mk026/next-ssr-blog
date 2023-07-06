import type { NextPage } from "next";
import { Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form";
import SignupLink from "../../components/signup-link";
import CustomHead from "../../components/common/custom-head";

const Signin: NextPage = () => {
  return (
    <>
      <CustomHead title="Signin" />
      <Typography variant="h1">Signin</Typography>
      <SigninForm />
      <SignupLink />
    </>
  );
};

export default Signin;

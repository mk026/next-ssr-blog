import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form";
import SignupLink from "../../components/signup-link";
import CustomHead from "../../components/common/custom-head";

const Signin: NextPage = () => {
  return (
    <>
      <CustomHead title="Signin" />
      <Container>
        <Typography variant="h1">Signin</Typography>
        <SigninForm />
        <SignupLink />
      </Container>
    </>
  );
};

export default Signin;

import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import SignupForm from "../../components/forms/signup-form";
import SigninLink from "../../components/signin-link";
import CustomHead from "../../components/common/custom-head";

const Signup: NextPage = () => {
  return (
    <>
      <CustomHead title="Signup" />
      <Container>
        <Typography variant="h1">Signup</Typography>
        <SignupForm />
        <SigninLink />
      </Container>
    </>
  );
};

export default Signup;

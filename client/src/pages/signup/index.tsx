import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import SignupForm from "../../components/forms/signup-form";
import SigninLink from "../../components/signin-link";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <Container>
        <Typography variant="h1">Signup page</Typography>
        <SignupForm />
        <SigninLink />
      </Container>
    </>
  );
};

export default Signup;

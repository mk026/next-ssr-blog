import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form";
import SignupLink from "../../components/signup-link";

const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>
      <Container>
        <Typography variant="h1">Signin page</Typography>
        <SigninForm />
        <SignupLink />
      </Container>
    </>
  );
};

export default Signin;

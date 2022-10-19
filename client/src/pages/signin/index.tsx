import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form/SigninForm";

const Signin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>
      <Container>
        <Typography variant="h1">Signin page</Typography>
        <SigninForm />
      </Container>
    </>
  );
};

export default Signin;

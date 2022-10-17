import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button, Container, Typography } from "@mui/material";

import SigninForm from "../../components/forms/signin-form/SigninForm";
import SignupForm from "../../components/forms/signup-form/SignupForm";

const Auth: NextPage = () => {
  const [isSignin, setIsSignin] = useState(false);

  const toggleAuthMode = () => setIsSignin((prev) => !prev);

  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>
      <Container>
        <Typography variant="h1">Auth page</Typography>
        {!isSignin && <SignupForm />}
        {isSignin && <SigninForm />}
        <Button onClick={toggleAuthMode}>
          Switch to {isSignin ? "Signup" : "Signin"}
        </Button>
      </Container>
    </>
  );
};

export default Auth;

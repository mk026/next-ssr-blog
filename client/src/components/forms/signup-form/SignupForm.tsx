import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { Box, Button, CircularProgress } from "@mui/material";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useSignupMutation } from "../../../store/api/authApi";
import FormField from "../../form-field/FormField";

const SignupForm: FC = () => {
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const router = useRouter();
  const methods = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    signup(values);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signupHandler)}>
        <FormField name="name" label="Name" />
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Password" type="password" />
        <FormField
          name="confirmPassword"
          label="Confirm password"
          type="password"
        />
        <Button
          type="submit"
          disabled={isLoading}
          endIcon={
            isLoading && <CircularProgress size="1rem" color="inherit" />
          }
        >
          Signup
        </Button>
      </Box>
    </FormProvider>
  );
};

export default SignupForm;

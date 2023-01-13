import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useSigninMutation } from "../../../store/api/authApi";
import { useRouter } from "next/router";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

const SigninForm: FC = () => {
  const [signin, { isLoading, isSuccess }] = useSigninMutation();
  const router = useRouter();
  const methods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: SigninFormValues) => {
    signin(values);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(signinHandler)}>
        <FormField name="email" label="Email" type="email" />
        <FormField name="password" label="Password" type="password" />
        <LoadingButton isLoading={isLoading}>Signin</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default SigninForm;

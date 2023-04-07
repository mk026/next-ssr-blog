import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useSigninMutation } from "../../../store/api/authApi";
import { useRouter } from "next/router";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

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
    <Form formMethods={methods} onSubmit={methods.handleSubmit(signinHandler)}>
      <FormField name="email" label="Email" type="email" />
      <FormField name="password" label="Password" type="password" />
      <LoadingButton isLoading={isLoading}>Signin</LoadingButton>
    </Form>
  );
};

export default SigninForm;

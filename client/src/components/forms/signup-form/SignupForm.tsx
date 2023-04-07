import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";
import { useSignupMutation } from "../../../store/api/authApi";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

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
    <Form formMethods={methods} onSubmit={methods.handleSubmit(signupHandler)}>
      <FormField name="name" label="Name" />
      <FormField name="bio" label="About yourself" multiline />
      <FormField name="email" label="Email" type="email" />
      <FormField name="password" label="Password" type="password" />
      <FormField
        name="confirmPassword"
        label="Confirm password"
        type="password"
      />
      <LoadingButton isLoading={isLoading}>Signup</LoadingButton>
    </Form>
  );
};

export default SignupForm;

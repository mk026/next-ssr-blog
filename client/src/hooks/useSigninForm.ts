import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSigninMutation } from "../store/api/authApi";
import {
  SigninFormValues,
  signinValidationSchema,
} from "../validation/signinValidation";

export const useSigninForm = () => {
  const [signin, { isLoading, isSuccess }] = useSigninMutation();
  const router = useRouter();
  const formMethods = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(signin),
    isLoading,
  };
};

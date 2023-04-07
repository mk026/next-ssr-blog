import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSignupMutation } from "../store/api/authApi";
import {
  SignupFormValues,
  signupValidationSchema,
} from "../validation/signupValidation";

export const useSignupForm = () => {
  const [signup, { isLoading, isSuccess }] = useSignupMutation();
  const router = useRouter();
  const formMethods = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  useEffect(() => {
    if (isSuccess) {
      router.push("/");
    }
  }, [isSuccess, router]);

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(signup),
    isLoading,
  };
};

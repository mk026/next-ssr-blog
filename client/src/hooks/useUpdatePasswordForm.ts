import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUpdatePasswordMutation } from "../store/api/userApi";
import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../validation/updatePasswordValidation";

export const useUpdatePasswordForm = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const formMethods = useForm<UpdatePasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(updatePassword),
    isLoading,
  };
};

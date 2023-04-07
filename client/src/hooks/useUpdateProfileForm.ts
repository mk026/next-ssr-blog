import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUpdateUserMutation } from "../store/api/userApi";
import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../validation/updateProfileValidation";

export const useUpdateProfileForm = () => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const formMethods = useForm<UpdateProfileFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updateProfileValidationSchema),
  });

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(updateUser),
    isLoading,
  };
};

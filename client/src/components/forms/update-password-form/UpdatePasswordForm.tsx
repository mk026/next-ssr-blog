import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../../../validation/updatePasswordValidation";
import { useUpdatePasswordMutation } from "../../../store/api/userApi";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

const UpdatePasswordForm: FC = () => {
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const methods = useForm<UpdatePasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  const updatePasswordHandler = (values: UpdatePasswordFormValues) => {
    updatePassword(values);
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updatePasswordHandler)}
      >
        <FormField label="Old password" name="oldPassword" />
        <FormField label="New password" name="password" />
        <FormField label="Confirm password" name="confirmPassword" />
        <LoadingButton isLoading={isLoading}>Update password</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default UpdatePasswordForm;

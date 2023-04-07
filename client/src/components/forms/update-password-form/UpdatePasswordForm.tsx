import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../../../validation/updatePasswordValidation";
import { useUpdatePasswordMutation } from "../../../store/api/userApi";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

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
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updatePasswordHandler)}
    >
      <FormField label="Old password" name="oldPassword" />
      <FormField label="New password" name="password" />
      <FormField label="Confirm password" name="confirmPassword" />
      <LoadingButton isLoading={isLoading}>Update password</LoadingButton>
    </Form>
  );
};

export default UpdatePasswordForm;

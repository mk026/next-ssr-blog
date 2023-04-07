import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../../../validation/updateProfileValidation";
import { useUpdateUserMutation } from "../../../store/api/userApi";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const UpdateProfileForm: FC = () => {
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const methods = useForm<UpdateProfileFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updateProfileValidationSchema),
  });

  const updateProfileHandler = (values: UpdateProfileFormValues) => {
    updateUser(values);
  };

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(updateProfileHandler)}
    >
      <FormField label="Name" name="name" />
      <FormField label="About yourself" name="bio" multiline />
      <FormField label="Email" name="email" />
      <LoadingButton isLoading={isLoading}>Update profile</LoadingButton>
    </Form>
  );
};

export default UpdateProfileForm;

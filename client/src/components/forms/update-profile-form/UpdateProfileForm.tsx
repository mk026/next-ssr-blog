import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  UpdateProfileFormValues,
  updateProfileValidationSchema,
} from "../../../validation/updateProfileValidation";
import { useUpdateUserMutation } from "../../../store/api/userApi";
import FormField from "../../common/form-field/FormField";
import LoadingButton from "../../common/loading-button/LoadingButton";

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
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(updateProfileHandler)}
      >
        <FormField label="Name" name="name" />
        <FormField label="About yourself" name="bio" multiline />
        <FormField label="Email" name="email" />
        <LoadingButton isLoading={isLoading}>Update profile</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default UpdateProfileForm;

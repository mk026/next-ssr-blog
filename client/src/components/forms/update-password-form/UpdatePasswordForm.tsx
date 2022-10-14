import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";

import {
  UpdatePasswordFormValues,
  updatePasswordValidationSchema,
} from "../../../validation/updatePasswordValidation";

const UpdatePasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdatePasswordFormValues>({
    mode: "onBlur",
    resolver: yupResolver(updatePasswordValidationSchema),
  });

  const updatePasswordHandler = (values: UpdatePasswordFormValues) => {
    console.log(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(updatePasswordHandler)}>
      <TextField
        type="password"
        label="Old password"
        {...register("oldPassword")}
        error={!!errors.oldPassword}
        helperText={errors.oldPassword && errors.oldPassword.message}
      />
      <TextField
        type="password"
        label="New password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
      />
      <TextField
        type="password"
        label="Confirm password"
        {...register("confirmPassword")}
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword && errors.confirmPassword.message}
      />
      <Button type="submit">Update password</Button>
    </Box>
  );
};

export default UpdatePasswordForm;

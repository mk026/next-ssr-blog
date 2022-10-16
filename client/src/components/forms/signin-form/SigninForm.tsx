import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";
import { useSigninMutation } from "../../../services/authApi";

const SigninForm: FC = () => {
  const [signin] = useSigninMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: SigninFormValues) => {
    signin(values);
  };

  return (
    <Box onSubmit={handleSubmit(signinHandler)}>
      <TextField
        type="email"
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email && errors.email.message}
      />
      <TextField
        type="password"
        label="Password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
      />
      <Button type="submit">Signin</Button>
    </Box>
  );
};

export default SigninForm;

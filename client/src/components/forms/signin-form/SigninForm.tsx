import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

import {
  SigninFormValues,
  signinValidationSchema,
} from "../../../validation/signinValidation";

const SigninForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signinValidationSchema),
  });

  const signinHandler = (values: SigninFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(signinHandler)}>
      <label>
        Email
        <input type="text" {...register("email")} />
      </label>
      {errors.email && <p>{errors.email.message}</p>}
      <label>
        Password
        <input type="password" {...register("password")} />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <Button type="submit">Signin</Button>
    </form>
  );
};

export default SigninForm;

import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

import {
  SignupFormValues,
  signupValidationSchema,
} from "../../../validation/signupValidation";

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "onBlur",
    resolver: yupResolver(signupValidationSchema),
  });

  const signupHandler = (values: SignupFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(signupHandler)}>
      <label>
        Name
        <input type="text" {...register("name")} />
      </label>
      {errors.name && <p>Name is a required field</p>}
      <label>
        Email
        <input type="text" {...register("email")} />
      </label>
      {errors.email && <p>Email is a required field</p>}
      <label>
        Password
        <input type="password" {...register("password")} />
      </label>
      {errors.password && <p>Password is a required field</p>}
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupForm;

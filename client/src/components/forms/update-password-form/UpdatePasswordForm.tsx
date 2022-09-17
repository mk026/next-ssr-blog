import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

const UpdatePasswordForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const updatePasswordHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(updatePasswordHandler)}>
      <label>
        Old password
        <input
          type="password"
          {...register("oldPassword", { required: true })}
        />
      </label>
      {errors.oldPassword && <p>Old password is a required field</p>}
      <label>
        New password
        <input type="password" {...register("password", { required: true })} />
      </label>
      {errors.password && <p>New password is a required field</p>}
      <label>
        Confirm password
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />
      </label>
      {errors.confirmPassword && <p>Confirm password is a required field</p>}
      <Button type="submit">Update password</Button>
    </form>
  );
};

export default UpdatePasswordForm;

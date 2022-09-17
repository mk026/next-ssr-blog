import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

const UpdateProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const updateProfileHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(updateProfileHandler)}>
      <label>
        Name
        <input type="text" {...register("name", { required: true })} />
      </label>
      {errors.name && <p>Name is a required field</p>}
      <label>
        Email
        <input type="text" {...register("email", { required: true })} />
      </label>
      {errors.email && <p>Email is a required field</p>}
      <Button type="submit">Update profile</Button>
    </form>
  );
};

export default UpdateProfileForm;

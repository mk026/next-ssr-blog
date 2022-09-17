import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

const AddCommentForm: FC = () => {
  const { register, handleSubmit } = useForm({ mode: "onBlur" });

  const addCommentHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addCommentHandler)}>
      <input type="text" {...register("content", { required: true })} />
      <Button type="submit">Add comment</Button>
    </form>
  );
};

export default AddCommentForm;

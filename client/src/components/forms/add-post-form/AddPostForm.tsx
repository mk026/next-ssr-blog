import { Button } from "@mui/material";
import { FC } from "react";
import { useForm } from "react-hook-form";

const AddPostForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const addPostHandler = (values: any) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addPostHandler)}>
      <label>
        Title
        <input type="text" {...register("title", { required: true })} />
      </label>
      {errors.title && <p>Title is a required field</p>}
      <label>
        Content
        <input type="text" {...register("content", { required: true })} />
      </label>
      {errors.content && <p>Content is a required field</p>}
      <Button type="submit">Add post</Button>
    </form>
  );
};

export default AddPostForm;

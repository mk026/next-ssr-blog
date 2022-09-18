import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

import {
  PostFormValues,
  postValidationSchema,
} from "../../../validation/postValidation";

const AddPostForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormValues>({
    mode: "onBlur",
    resolver: yupResolver(postValidationSchema),
  });

  const addPostHandler = (values: PostFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addPostHandler)}>
      <label>
        Title
        <input type="text" {...register("title")} />
      </label>
      {errors.title && <p>{errors.title.message}</p>}
      <label>
        Content
        <input type="text" {...register("content")} />
      </label>
      {errors.content && <p>{errors.content.message}</p>}
      <Button type="submit">Add post</Button>
    </form>
  );
};

export default AddPostForm;

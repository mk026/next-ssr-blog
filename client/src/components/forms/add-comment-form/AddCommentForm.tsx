import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";

import {
  CommentFormValues,
  commentValidationSchema,
} from "../../../validation/commentValidation";

const AddCommentForm: FC = () => {
  const { register, handleSubmit } = useForm<CommentFormValues>({
    mode: "onBlur",
    resolver: yupResolver(commentValidationSchema),
  });

  const addCommentHandler = (values: CommentFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(addCommentHandler)}>
      <input type="text" {...register("content")} />
      <Button type="submit">Add comment</Button>
    </form>
  );
};

export default AddCommentForm;

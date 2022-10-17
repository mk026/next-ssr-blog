import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField } from "@mui/material";

import {
  CommentFormValues,
  commentValidationSchema,
} from "../../../validation/commentValidation";
import { useAddPostCommentMutation } from "../../../services/commentApi";

const AddCommentForm: FC = () => {
  const [addPostComment] = useAddPostCommentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormValues>({
    mode: "onBlur",
    resolver: yupResolver(commentValidationSchema),
  });

  const addCommentHandler = (values: CommentFormValues) => {
    addPostComment(values);
  };

  return (
    <Box onSubmit={handleSubmit(addCommentHandler)}>
      <TextField
        label="Add comment"
        {...register("content")}
        error={!!errors.content}
        helperText={errors.content && errors.content.message}
      />
      <Button type="submit">Add comment</Button>
    </Box>
  );
};

export default AddCommentForm;

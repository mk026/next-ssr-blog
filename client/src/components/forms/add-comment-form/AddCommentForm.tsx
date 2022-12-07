import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, TextField } from "@mui/material";

import {
  CommentFormValues,
  commentValidationSchema,
} from "../../../validation/commentValidation";
import { useAddPostCommentMutation } from "../../../store/api/commentApi";

interface AddCommentFormProps {
  postId: number;
}

const AddCommentForm: FC<AddCommentFormProps> = ({ postId }) => {
  const [addPostComment, { isLoading }] = useAddPostCommentMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormValues>({
    mode: "onBlur",
    resolver: yupResolver(commentValidationSchema),
  });

  const addCommentHandler = (values: CommentFormValues) => {
    addPostComment({ ...values, postId });
  };

  return (
    <Box onSubmit={handleSubmit(addCommentHandler)}>
      <TextField
        label="Add comment"
        {...register("content")}
        error={!!errors.content}
        helperText={errors.content?.message}
      />
      <Button
        type="submit"
        disabled={isLoading}
        endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
      >
        Add comment
      </Button>
    </Box>
  );
};

export default AddCommentForm;

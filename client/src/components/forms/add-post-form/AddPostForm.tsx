import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, TextField } from "@mui/material";

import {
  PostFormValues,
  postValidationSchema,
} from "../../../validation/postValidation";
import { useAddPostMutation } from "../../../services/postApi";

const AddPostForm: FC = () => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormValues>({
    mode: "onBlur",
    resolver: yupResolver(postValidationSchema),
  });

  const addPostHandler = (values: PostFormValues) => {
    addPost(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(addPostHandler)}>
      <TextField
        label="Title"
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title && errors.title.message}
      />
      <TextField
        label="Content"
        {...register("content")}
        error={!!errors.content}
        helperText={errors.content && errors.content.message}
      />
      <Button
        type="submit"
        disabled={isLoading}
        endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
      >
        Add post
      </Button>
    </Box>
  );
};

export default AddPostForm;

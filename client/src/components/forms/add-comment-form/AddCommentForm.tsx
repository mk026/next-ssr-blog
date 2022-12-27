import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  CommentFormValues,
  commentValidationSchema,
} from "../../../validation/commentValidation";
import { useAddPostCommentMutation } from "../../../store/api/commentApi";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

import classes from "./AddCommentForm.module.scss";

interface AddCommentFormProps {
  postId: number;
}

const AddCommentForm: FC<AddCommentFormProps> = ({ postId }) => {
  const [addPostComment, { isLoading }] = useAddPostCommentMutation();
  const methods = useForm<CommentFormValues>({
    mode: "onBlur",
    resolver: yupResolver(commentValidationSchema),
  });

  const addCommentHandler = (values: CommentFormValues) => {
    addPostComment({ ...values, postId });
  };

  return (
    <FormProvider {...methods}>
      <Box
        className={classes.form}
        component="form"
        onSubmit={methods.handleSubmit(addCommentHandler)}
      >
        <FormField label="Add comment" name="content" />
        <LoadingButton isLoading={isLoading}>Add comment</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AddCommentForm;

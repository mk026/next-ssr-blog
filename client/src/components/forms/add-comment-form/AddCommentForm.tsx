import { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  CommentFormValues,
  commentValidationSchema,
} from "../../../validation/commentValidation";
import { useAddPostCommentMutation } from "../../../store/api/commentApi";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

import classes from "./AddCommentForm.module.scss";
import Form from "../../common/form";

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
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(addCommentHandler)}
      className={classes.form}
    >
      <FormField label="Add comment" name="content" />
      <LoadingButton isLoading={isLoading}>Add comment</LoadingButton>
    </Form>
  );
};

export default AddCommentForm;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAddPostCommentMutation } from "../store/api/commentApi";
import {
  CommentFormValues,
  commentValidationSchema,
} from "../validation/commentValidation";

export const useAddCommentForm = (postId: number) => {
  const [addPostComment, { isLoading }] = useAddPostCommentMutation();
  const formMethods = useForm<CommentFormValues>({
    mode: "onBlur",
    resolver: yupResolver(commentValidationSchema),
  });

  const addCommentHandler = (values: CommentFormValues) => {
    addPostComment({ ...values, postId });
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addCommentHandler),
    isLoading,
  };
};

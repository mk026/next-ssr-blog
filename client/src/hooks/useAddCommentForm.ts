import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useRouter } from "next/router";
import { useAddPostCommentMutation } from "../store/api/commentApi";
import {
  CommentFormValues,
  commentValidationSchema,
} from "../validation/commentValidation";

export const useAddCommentForm = () => {
  const [addPostComment, { isLoading }] = useAddPostCommentMutation();
  const formMethods = useForm<CommentFormValues>({
    mode: "onBlur",
    resolver: yupResolver(commentValidationSchema),
  });
  const router = useRouter();
  const postId = Number(router.query.id);

  const addCommentHandler = (values: CommentFormValues) => {
    addPostComment({ ...values, postId });
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addCommentHandler),
    isLoading,
  };
};

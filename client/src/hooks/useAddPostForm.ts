import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAddPostMutation } from "../store/api/postApi";
import {
  PostFormValues,
  postValidationSchema,
} from "../validation/postValidation";

export const useAddPostForm = () => {
  const [addPost, { isLoading, isSuccess, data }] = useAddPostMutation();
  const formMethods = useForm<PostFormValues>({
    mode: "onBlur",
    resolver: yupResolver(postValidationSchema),
  });
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      router.push(`/posts/${data?.id}`);
    }
  }, [isSuccess, data, router]);

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(addPost),
    isLoading,
  };
};

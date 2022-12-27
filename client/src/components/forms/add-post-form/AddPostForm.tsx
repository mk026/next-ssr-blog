import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/material";

import {
  PostFormValues,
  postValidationSchema,
} from "../../../validation/postValidation";
import { useAddPostMutation } from "../../../store/api/postApi";
import { useRouter } from "next/router";
import FormField from "../../form-field/FormField";
import LoadingButton from "../../loading-button/LoadingButton";

const AddPostForm: FC = () => {
  const [addPost, { isLoading, isSuccess, data }] = useAddPostMutation();
  const methods = useForm<PostFormValues>({
    mode: "onBlur",
    resolver: yupResolver(postValidationSchema),
  });
  const router = useRouter();

  const addPostHandler = (values: PostFormValues) => {
    addPost(values);
  };

  useEffect(() => {
    if (isSuccess) {
      router.push(`/posts/${data?.id}`);
    }
  }, [isSuccess, data, router]);

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(addPostHandler)}>
        <FormField label="Title" name="title" />
        <FormField label="Content" name="content" />
        <LoadingButton isLoading={isLoading}>Add post</LoadingButton>
      </Box>
    </FormProvider>
  );
};

export default AddPostForm;

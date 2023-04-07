import { FC } from "react";

import { useAddPostForm } from "../../../hooks/useAddPostForm";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";
import Form from "../../common/form";

const AddPostForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useAddPostForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Title" name="title" />
      <FormField label="Description" name="description" />
      <FormField label="Content" name="content" />
      <FormField label="Category" name="category" />
      <LoadingButton isLoading={isLoading}>Add post</LoadingButton>
    </Form>
  );
};

export default AddPostForm;

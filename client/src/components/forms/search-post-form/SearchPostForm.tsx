import { FC } from "react";

import { useSearchPostForm } from "../../../hooks/useSearchPostForm";
import FormField from "../../common/form-field";
import Form from "../../common/form";
import LoadingButton from "../../common/loading-button";

const SearchPostForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSearchPostForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Search post" name="query" />
      <LoadingButton isLoading={isLoading}>Search</LoadingButton>
    </Form>
  );
};

export default SearchPostForm;

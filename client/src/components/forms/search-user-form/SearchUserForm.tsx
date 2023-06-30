import { FC } from "react";

import { useSearchUserForm } from "../../../hooks/useSearchUserForm";
import Form from "../../common/form";
import FormField from "../../common/form-field";
import LoadingButton from "../../common/loading-button";

const SearchUserForm: FC = () => {
  const { formMethods, onSubmit, isLoading } = useSearchUserForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Search user" name="query" />
      <LoadingButton isLoading={isLoading}>Search</LoadingButton>
    </Form>
  );
};

export default SearchUserForm;

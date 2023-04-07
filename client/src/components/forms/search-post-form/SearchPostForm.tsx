import { FC } from "react";
import { Button } from "@mui/material";

import { useSearchPostForm } from "../../../hooks/useSearchPostForm";
import FormField from "../../common/form-field";
import Form from "../../common/form";

const SearchPostForm: FC = () => {
  const { formMethods, onSubmit } = useSearchPostForm();

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormField label="Search post" name="query" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchPostForm;

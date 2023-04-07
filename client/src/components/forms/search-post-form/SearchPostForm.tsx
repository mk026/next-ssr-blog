import { FC } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

import FormField from "../../common/form-field";
import Form from "../../common/form";

export interface SearchPostFormValues {
  query: string;
}

const SearchPostForm: FC = () => {
  const methods = useForm<SearchPostFormValues>({
    mode: "onBlur",
  });

  const searchPostHandler = ({ query }: SearchPostFormValues) => {
    console.log(query);
  };

  return (
    <Form
      formMethods={methods}
      onSubmit={methods.handleSubmit(searchPostHandler)}
    >
      <FormField label="Search post" name="query" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchPostForm;

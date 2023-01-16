import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Box, Button } from "@mui/material";

import FormField from "../../common/form-field";

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
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(searchPostHandler)}>
        <FormField label="Search post" name="query" />
        <Button type="submit">Search</Button>
      </Box>
    </FormProvider>
  );
};

export default SearchPostForm;

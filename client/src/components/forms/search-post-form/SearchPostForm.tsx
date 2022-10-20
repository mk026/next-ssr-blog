import { FC } from "react";
import { useForm } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";

export interface SearchPostFormValues {
  query: string;
}

const SearchPostForm: FC = () => {
  const { register, handleSubmit } = useForm<SearchPostFormValues>({
    mode: "onBlur",
  });

  const searchPostHandler = ({ query }: SearchPostFormValues) => {
    console.log(query);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(searchPostHandler)}>
      <TextField label="Search post" {...register("query")} />
      <Button type="submit">Search</Button>
    </Box>
  );
};

export default SearchPostForm;

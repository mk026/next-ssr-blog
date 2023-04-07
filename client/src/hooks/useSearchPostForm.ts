import { useForm } from "react-hook-form";

interface SearchPostFormValues {
  query: string;
}

export const useSearchPostForm = () => {
  const formMethods = useForm<SearchPostFormValues>({
    mode: "onBlur",
  });

  const searchPostHandler = ({ query }: SearchPostFormValues) => {
    console.log(query);
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(searchPostHandler),
  };
};

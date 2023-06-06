import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useLazySearchPostsQuery } from "../store/api/postApi";

interface SearchPostFormValues {
  query: string;
}

export const useSearchPostForm = () => {
  const [searchPosts, { isLoading }] = useLazySearchPostsQuery();
  const formMethods = useForm<SearchPostFormValues>({
    mode: "onBlur",
  });
  const router = useRouter();

  const searchPostHandler = ({ query }: SearchPostFormValues) => {
    const params = new URLSearchParams({ title: query }).toString();
    router.push(`?${params}`);
    searchPosts({ title: query });
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(searchPostHandler),
    isLoading,
  };
};

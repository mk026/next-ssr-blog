import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import { useLazySearchUsersQuery } from "../store/api/userApi";

interface SearchUserFormValues {
  query: string;
}

export const useSearchUserForm = () => {
  const [searchUsers, { isLoading }] = useLazySearchUsersQuery();
  const formMethods = useForm<SearchUserFormValues>({
    mode: "onBlur",
  });
  const router = useRouter();

  const searchUserHandler = ({ query }: SearchUserFormValues) => {
    const params = new URLSearchParams({ name: query }).toString();
    router.push(`?${params}`);
    searchUsers({ name: query });
  };

  return {
    formMethods,
    onSubmit: formMethods.handleSubmit(searchUserHandler),
    isLoading,
  };
};

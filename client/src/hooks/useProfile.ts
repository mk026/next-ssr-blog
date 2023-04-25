import { useRouter } from "next/router";

import { useGetUserQuery } from "../store/api/userApi";

export const useProfile = () => {
  const router = useRouter();
  const userId = router.query.id as string;
  const { data: user } = useGetUserQuery(userId);

  return { user };
};

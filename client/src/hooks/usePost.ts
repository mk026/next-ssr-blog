import { useRouter } from "next/router";

import { useGetPostQuery } from "../store/api/postApi";

export const usePost = () => {
  const router = useRouter();
  const postId = Number(router.query.id);
  const { data: post } = useGetPostQuery(postId);

  return {
    post,
  };
};

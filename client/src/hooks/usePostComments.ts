import { useRouter } from "next/router";

import { useGetPostCommentsQuery } from "../store/api/commentApi";

export const usePostComments = () => {
  const router = useRouter();
  const postId = Number(router.query.id);
  const { data: comments, isLoading } = useGetPostCommentsQuery(postId);

  return {
    comments,
    isLoading,
  };
};

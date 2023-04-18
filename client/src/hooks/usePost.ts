import { useRouter } from "next/router";

import { useGetPostQuery } from "../store/api/postApi";
import { useGetPostCommentsQuery } from "../store/api/commentApi";

export const usePost = () => {
  const router = useRouter();
  const postId = Number(router.query.id);
  const { data: post } = useGetPostQuery(postId);
  const { data: comments } = useGetPostCommentsQuery(postId);

  return {
    post,
    comments,
  };
};

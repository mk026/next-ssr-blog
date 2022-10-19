import type { GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";
import CommentsList from "../../../components/comments/comments-list/CommentsList";

import FullPost from "../../../components/posts/full-post/FullPost";
import {
  commentApi,
  useGetPostCommentsQuery,
} from "../../../services/commentApi";
import { postApi, useGetPostQuery } from "../../../services/postApi";
import wrapper, { setupStore } from "../../../store";

const Post: NextPage = () => {
  const router = useRouter();
  const postId = Number(router.query.id);
  const { data: post } = useGetPostQuery(postId);
  const { data: comments } = useGetPostCommentsQuery(postId);

  return (
    <>
      <FullPost post={post} />
      <CommentsList comments={comments} />
    </>
  );
};

export default Post;

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params }) => {
      const postId = Number(params?.id);
      if (postId) {
        store.dispatch(postApi.endpoints.getPost.initiate(postId));
        store.dispatch(commentApi.endpoints.getPostComments.initiate(postId));
      }
      await Promise.all(postApi.util.getRunningOperationPromises());
      return { props: {} };
    }
);

export const getStaticPaths: GetStaticPaths = async () => {
  const store = setupStore();
  const result = await store.dispatch(postApi.endpoints.getPosts.initiate());
  const paths = result.data!.map((post) => `/posts/${post.id}`).slice(0, 10);

  return { paths, fallback: true };
};

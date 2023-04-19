import type { GetStaticPaths, NextPage } from "next";

import { commentApi } from "../../../store/api/commentApi";
import { postApi } from "../../../store/api/postApi";
import { usePost } from "../../../hooks/usePost";
import FullPost from "../../../components/posts/full-post";
import PostComments from "../../../components/posts/post-comments";
import CustomHead from "../../../components/common/custom-head";
import wrapper, { setupStore } from "../../../store";

const Post: NextPage = () => {
  const { post } = usePost();

  return (
    <>
      <CustomHead title={post?.title || "Post"} />
      <FullPost post={post} />
      <PostComments />
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

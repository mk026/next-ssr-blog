import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import PostsList from "../../components/posts/posts-list/PostsList";
import { postApi, useGetPostsQuery } from "../../services/postApi";
import wrapper from "../../store";

const Posts: NextPage = () => {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Container>
        <Typography variant="h1"> Posts page</Typography>
        <PostsList posts={posts} />
      </Container>
    </>
  );
};

export default Posts;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(postApi.endpoints.getPosts.initiate());
  await Promise.all(postApi.util.getRunningOperationPromises());
  return { props: {} };
});

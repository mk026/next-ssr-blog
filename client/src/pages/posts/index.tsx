import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";

import PostsList from "../../components/posts/posts-list/PostsList";
import { postApi, useGetPostsQuery } from "../../store/api/postApi";
import wrapper from "../../store";
import PostCategories from "../../components/posts/post-categories/PostCategories";
import { categoryApi } from "../../store/api/categoryApi";

const Posts: NextPage = () => {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Container>
        <Typography variant="h1"> Posts page</Typography>
        <Link href="/posts/add">
          <Button>Add new post</Button>
        </Link>
        <PostCategories />
        <PostsList posts={posts} />
      </Container>
    </>
  );
};

export default Posts;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(postApi.endpoints.getPosts.initiate());
  store.dispatch(categoryApi.endpoints.getCategories.initiate());
  await Promise.all(postApi.util.getRunningOperationPromises());
  await Promise.all(categoryApi.util.getRunningOperationPromises());
  return { props: {} };
});

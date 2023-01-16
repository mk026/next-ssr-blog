import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button, Container, Typography } from "@mui/material";

import PostsList from "../../components/posts/posts-list";
import PostCategories from "../../components/posts/post-categories";
import PopularTags from "../../components/tags/popular-tags";
import wrapper from "../../store";
import { postApi, useGetPostsQuery } from "../../store/api/postApi";
import { categoryApi } from "../../store/api/categoryApi";
import { tagApi } from "../../store/api/tagApi";

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
        <PopularTags />
        <PostsList posts={posts} />
      </Container>
    </>
  );
};

export default Posts;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(postApi.endpoints.getPosts.initiate());
  store.dispatch(categoryApi.endpoints.getCategories.initiate());
  store.dispatch(tagApi.endpoints.getPopularTags.initiate());
  await Promise.all(postApi.util.getRunningOperationPromises());
  await Promise.all(categoryApi.util.getRunningOperationPromises());
  await Promise.all(tagApi.util.getRunningOperationPromises());
  return { props: {} };
});

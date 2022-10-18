import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import PostsList from "../../components/posts/posts-list/PostsList";
import { useGetPostsQuery } from "../../services/postApi";

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

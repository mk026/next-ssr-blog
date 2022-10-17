import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import PostsList from "../../components/posts/posts-list/PostsList";

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Container>
        <Typography variant="h1"> Posts page</Typography>
        <PostsList />
      </Container>
    </>
  );
};

export default Posts;

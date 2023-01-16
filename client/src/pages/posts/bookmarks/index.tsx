import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import PostsList from "../../../components/posts/posts-list";

const Bookmarks: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bookmarks</title>
      </Head>
      <Container>
        <Typography variant="h1">Bookmarks page</Typography>
        <PostsList posts={[]} />
      </Container>
    </>
  );
};

export default Bookmarks;

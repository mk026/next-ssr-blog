import type { NextPage } from "next";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import SearchPostForm from "../../../components/forms/search-post-form/SearchPostForm";
import PostsList from "../../../components/posts/posts-list/PostsList";

const SearchPosts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search Posts</title>
      </Head>
      <Container>
        <Typography variant="h1">Search posts page</Typography>
        <SearchPostForm />
        <PostsList posts={[]} />
      </Container>
    </>
  );
};

export default SearchPosts;

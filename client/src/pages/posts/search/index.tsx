import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import SearchPostForm from "../../../components/forms/search-post-form";
import PostsList from "../../../components/posts/posts-list";
import CustomHead from "../../../components/common/custom-head";

const SearchPosts: NextPage = () => {
  return (
    <>
      <CustomHead title="Search Posts" />
      <Container>
        <Typography variant="h1">Search Posts</Typography>
        <SearchPostForm />
        <PostsList posts={[]} />
      </Container>
    </>
  );
};

export default SearchPosts;

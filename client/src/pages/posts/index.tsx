import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import PostsList from "../../components/posts/posts-list/PostsList";

const Posts: NextPage = () => {
  return (
    <Container>
      <Typography variant="h1"> Posts page</Typography>
      <PostsList />
    </Container>
  );
};

export default Posts;

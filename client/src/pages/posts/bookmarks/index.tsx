import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import PostsList from "../../../components/posts/posts-list";
import CustomHead from "../../../components/common/custom-head";

const Bookmarks: NextPage = () => {
  return (
    <>
      <CustomHead title="Bookmarks" />
      <Container>
        <Typography variant="h1">Bookmarks</Typography>
        <PostsList posts={[]} />
      </Container>
    </>
  );
};

export default Bookmarks;

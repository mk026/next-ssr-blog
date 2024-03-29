import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";

import PostsList from "../../components/posts/posts-list";
import PostCategories from "../../components/posts/post-categories";
import PopularTags from "../../components/tags/popular-tags";
import CustomHead from "../../components/common/custom-head";
import AddPostLink from "../../components/posts/add-post-link";
import wrapper from "../../store";
import { postApi, useGetPostsQuery } from "../../store/api/postApi";
import { categoryApi } from "../../store/api/categoryApi";
import { tagApi } from "../../store/api/tagApi";

const Posts: NextPage = () => {
  const { data: posts = [] } = useGetPostsQuery();

  return (
    <>
      <CustomHead title="Posts" />
      <Container>
        <Typography variant="h1">Posts</Typography>
        <AddPostLink />
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

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Container, Typography } from "@mui/material";

import SearchPostForm from "../../../components/forms/search-post-form";
import PostsList from "../../../components/posts/posts-list";
import CustomHead from "../../../components/common/custom-head";
import wrapper from "../../../store";
import { postApi, useSearchPostsQuery } from "../../../store/api/postApi";

const SearchPosts: NextPage = () => {
  const router = useRouter();
  const { data, isLoading } = useSearchPostsQuery({
    title: router.query.title as string,
  });

  return (
    <>
      <CustomHead title="Search Posts" />
      <Container>
        <Typography variant="h1">Search Posts</Typography>
        <SearchPostForm />
        {isLoading && <p>Loading...</p>}
        <PostsList posts={data || []} />
      </Container>
    </>
  );
};

export default SearchPosts;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      const title = params?.title as string;
      if (title) {
        store.dispatch(postApi.endpoints.searchPosts.initiate({ title }));
      }
      await Promise.all(postApi.util.getRunningOperationPromises());
      return { props: {} };
    }
);

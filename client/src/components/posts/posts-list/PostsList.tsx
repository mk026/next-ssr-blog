import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { IPost } from "../../../models/post";
import PostPreview from "../post-preview";

interface PostsListProps {
  posts: IPost[];
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
  if (!posts.length) {
    return <Typography variant="body1">No posts found</Typography>;
  }

  return (
    <Stack>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </Stack>
  );
};

export default PostsList;

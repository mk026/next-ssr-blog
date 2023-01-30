import { Stack } from "@mui/material";
import { FC } from "react";

import { IPost } from "../../../models/post";
import PostPreview from "../post-preview";

interface PostsListProps {
  posts: IPost[];
}

const PostsList: FC<PostsListProps> = ({ posts }) => {
  if (!posts.length) {
    return <p>No posts found</p>;
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

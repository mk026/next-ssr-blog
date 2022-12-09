import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { IPost } from "../../../models/IPost";
import PostHeader from "../post-header/PostHeader";

interface FullPostProps {
  post: IPost;
}

const FullPost: FC<FullPostProps> = ({ post }) => {
  return (
    <Stack>
      <PostHeader post={post} />
      <Typography variant="body1">{post.content}</Typography>
    </Stack>
  );
};

export default FullPost;

import { FC } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";

import { IPost } from "../../../models/post";

interface PostHeaderProps {
  post: IPost;
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  return (
    <Stack direction="row">
      <Typography variant="h2">{post.title}</Typography>
      <Box>
        <Typography>{post.author.name}</Typography>
        <Avatar alt={post.author.name} src={post.author.avatarUrl} />
      </Box>
      <Typography>{new Date(post.createdAt).toLocaleString()}</Typography>
    </Stack>
  );
};

export default PostHeader;

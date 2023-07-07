import { FC } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";

import { IPost } from "../../../models/post";

import classes from "./PostHeader.module.scss";

interface PostHeaderProps {
  post: IPost;
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  return (
    <Stack direction="row" className={classes.header}>
      <Typography variant="h2" className={classes.title}>
        {post.title}
      </Typography>
      <Box>
        <Typography>{post.author.name}</Typography>
        <Avatar alt={post.author.name} src={post.author.avatarUrl} />
      </Box>
      <Typography>{post.createdAt}</Typography>
    </Stack>
  );
};

export default PostHeader;

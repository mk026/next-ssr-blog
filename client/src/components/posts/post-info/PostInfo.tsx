import { Stack, Typography } from "@mui/material";
import { FC } from "react";

import { IPost } from "../../../models/post";

import classes from "./PostInfo.module.scss";

interface PostInfoProps {
  post: IPost;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
  return (
    <Stack direction="row" className={classes.info}>
      <Typography>Views: {post.views}</Typography>
    </Stack>
  );
};

export default PostInfo;

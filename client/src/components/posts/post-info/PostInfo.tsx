import { Stack, Typography } from "@mui/material";
import { FC } from "react";

import { IPost } from "../../../models/IPost";

interface PostInfoProps {
  post: IPost;
}

const PostInfo: FC<PostInfoProps> = ({ post }) => {
  return (
    <Stack direction="row">
      <Typography>Views: {post.views}</Typography>
    </Stack>
  );
};

export default PostInfo;

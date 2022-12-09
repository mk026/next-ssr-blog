import { FC } from "react";
import { Typography } from "@mui/material";

import { IPost } from "../../../models/IPost";

interface PostHeaderProps {
  post: IPost;
}

const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  return <Typography variant="h2">{post.title}</Typography>;
};

export default PostHeader;

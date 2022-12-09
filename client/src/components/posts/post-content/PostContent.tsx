import { FC } from "react";
import { Typography } from "@mui/material";

import { IPost } from "../../../models/IPost";

interface PostContentProps {
  post: IPost;
}

const PostContent: FC<PostContentProps> = ({ post }) => {
  return <Typography variant="body1">{post.content}</Typography>;
};

export default PostContent;

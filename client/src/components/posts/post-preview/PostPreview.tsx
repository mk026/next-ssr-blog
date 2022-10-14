import { FC } from "react";
import { Card, Typography } from "@mui/material";

import { IPost } from "../../../models/IPost";

interface PostPreviewProps {
  post: IPost;
}

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <Card>
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="body1">Post preview</Typography>
    </Card>
  );
};

export default PostPreview;

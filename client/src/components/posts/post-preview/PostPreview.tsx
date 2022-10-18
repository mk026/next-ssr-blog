import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";

import { IPost } from "../../../models/IPost";
import Link from "next/link";

interface PostPreviewProps {
  post: IPost;
}

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <Card>
      <Typography variant="h2">{post.title}</Typography>
      <Typography variant="body1">Post preview</Typography>
      <Link href={`/posts/${post.id}`}>
        <Button>Read more</Button>
      </Link>
    </Card>
  );
};

export default PostPreview;

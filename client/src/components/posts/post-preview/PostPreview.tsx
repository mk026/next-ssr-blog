import { FC } from "react";
import { Button, Card, Typography } from "@mui/material";

import { IPost } from "../../../models/post";
import Link from "next/link";

interface PostPreviewProps {
  post: IPost;
}

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <Card>
      <Link href={`/posts/${post.id}`} passHref>
        <Typography component="a" variant="h2">
          {post.title}
        </Typography>
      </Link>
      <Typography variant="body1">{post.excerpt}</Typography>
      <Link href={`/posts/${post.id}`} passHref>
        <Button component="a">Read more</Button>
      </Link>
    </Card>
  );
};

export default PostPreview;

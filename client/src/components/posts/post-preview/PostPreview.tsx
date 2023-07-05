import { FC } from "react";
import Link from "next/link";
import { Button, Card, Typography } from "@mui/material";

import { IPost } from "../../../models/post";

import classes from "./PostPreview.module.scss";

interface PostPreviewProps {
  post: IPost;
}

const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <Card className={classes.preview}>
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

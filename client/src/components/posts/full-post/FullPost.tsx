import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { IPost } from "../../../models/IPost";

interface FullPostProps {
  post?: IPost;
}

const FullPost: FC<FullPostProps> = ({ post }) => {
  return (
    <Stack>
      <Typography variant="h2">{post?.title}</Typography>
      <Typography variant="body1">{post?.content}</Typography>
    </Stack>
  );
};

export default FullPost;

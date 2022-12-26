import { FC } from "react";
import { CircularProgress, Stack } from "@mui/material";

import { IPost } from "../../../models/IPost";
import PostContent from "../post-content/PostContent";
import PostHeader from "../post-header/PostHeader";
import PostInfo from "../post-info/PostInfo";

interface FullPostProps {
  post?: IPost;
}

const FullPost: FC<FullPostProps> = ({ post }) => {
  if (!post) {
    return <CircularProgress />;
  }

  return (
    <Stack>
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostInfo post={post} />
    </Stack>
  );
};

export default FullPost;

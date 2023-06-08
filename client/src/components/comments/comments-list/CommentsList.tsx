import { FC } from "react";
import { Stack, Typography } from "@mui/material";

import { IComment } from "../../../models/comment";
import CommentItem from "../comment-item";

interface CommentsListProps {
  comments?: IComment[];
}

const CommentsList: FC<CommentsListProps> = ({ comments = [] }) => {
  if (comments.length === 0) {
    return <Typography>No comments yet</Typography>;
  }

  return (
    <Stack>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </Stack>
  );
};

export default CommentsList;

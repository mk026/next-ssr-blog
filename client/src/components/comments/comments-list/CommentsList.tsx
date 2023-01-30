import { FC } from "react";
import { Typography } from "@mui/material";

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
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;

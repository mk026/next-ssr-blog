import { Avatar, Card, Typography } from "@mui/material";
import { FC } from "react";

import { IComment } from "../../../models/IComment";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <Card>
      <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
      <Typography>{comment.author.name}</Typography>
      <Typography>{comment.content}</Typography>
    </Card>
  );
};

export default CommentItem;

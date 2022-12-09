import { FC } from "react";
import { Avatar, Card, Typography } from "@mui/material";
import Link from "next/link";

import { IComment } from "../../../models/IComment";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <Card>
      <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
      <Typography>
        <Link href={`/profile/${comment.author.id}`}>
          {comment.author.name}
        </Link>
      </Typography>
      <Typography>{comment.content}</Typography>
    </Card>
  );
};

export default CommentItem;

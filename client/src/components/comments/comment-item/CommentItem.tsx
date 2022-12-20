import { FC } from "react";
import { Avatar, Card, Typography } from "@mui/material";
import Link from "next/link";

import { IComment } from "../../../models/IComment";

import classes from "./CommentItem.module.scss";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <Card className={classes.comment}>
      <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
      <Typography className={classes["author-name"]}>
        <Link href={`/profile/${comment.author.id}`}>
          {comment.author.name}
        </Link>
      </Typography>
      <Typography>{comment.createdAt.toLocaleDateString()}</Typography>
      <Typography>{comment.content}</Typography>
    </Card>
  );
};

export default CommentItem;

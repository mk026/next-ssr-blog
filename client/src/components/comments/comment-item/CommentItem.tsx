import { FC } from "react";
import { Avatar, Button, Card, Typography } from "@mui/material";
import Link from "next/link";

import { IComment } from "../../../models/comment";
import { useAppSelector } from "../../../hooks/redux";
import { getAuthState } from "../../../store/selectors/authSelectors";

import classes from "./CommentItem.module.scss";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  const { user } = useAppSelector(getAuthState);

  const isAuthor = user?.id === comment.author.id;

  return (
    <Card className={classes.comment}>
      <Avatar alt={comment.author.name} src={comment.author.avatarUrl} />
      <Typography className={classes["author-name"]}>
        <Link href={`/profile/${comment.author.id}`}>
          {comment.author.name}
        </Link>
      </Typography>
      {isAuthor && <Button>Edit</Button>}
      <Typography>{new Date(comment.createdAt).toLocaleString()}</Typography>
      <Typography>{comment.content}</Typography>
    </Card>
  );
};

export default CommentItem;

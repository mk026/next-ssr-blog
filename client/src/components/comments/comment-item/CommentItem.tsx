import { FC } from "react";
import { IComment } from "../../../models/IComment";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return <div>{comment.content}</div>;
};

export default CommentItem;

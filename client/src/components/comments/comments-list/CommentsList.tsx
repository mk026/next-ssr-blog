import { FC } from "react";
import { IComment } from "../../../models/IComment";
import CommentItem from "../comment-item/CommentItem";

interface CommentsListProps {
  comments?: IComment[];
}

const CommentsList: FC<CommentsListProps> = ({ comments = [] }) => {
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

import { FC } from "react";
import { IComment } from "../../../models/IComment";
import CommentItem from "../comment-item/CommentItem";

const dummyComments: IComment[] = [
  { id: 1, userId: 1, postId: 1, content: "Test comment 1" },
  { id: 2, userId: 2, postId: 1, content: "Test comment 2" },
  { id: 3, userId: 3, postId: 1, content: "Test comment 3" },
];

const CommentsList: FC = () => {
  return (
    <ul>
      {dummyComments.map((comment) => (
        <li key={comment.id}>
          <CommentItem comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;

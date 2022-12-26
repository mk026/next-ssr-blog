import { FC } from "react";
import { CircularProgress } from "@mui/material";

import { IComment } from "../../../models/IComment";
import CommentsList from "../../comments/comments-list/CommentsList";
import AddCommentForm from "../../forms/add-comment-form/AddCommentForm";

interface PostCommentsProps {
  postId: number;
  comments?: IComment[];
}

const PostComments: FC<PostCommentsProps> = ({ postId, comments }) => {
  if (!comments) {
    return <CircularProgress />;
  }

  return (
    <>
      <AddCommentForm postId={postId} />
      <CommentsList comments={comments} />
    </>
  );
};

export default PostComments;

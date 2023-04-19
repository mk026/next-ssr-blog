import { FC } from "react";
import { CircularProgress } from "@mui/material";

import { usePostComments } from "../../../hooks/usePostComments";
import CommentsList from "../../comments/comments-list";
import AddCommentForm from "../../forms/add-comment-form";

const PostComments: FC = () => {
  const { comments } = usePostComments();

  if (!comments) {
    return <CircularProgress />;
  }

  return (
    <>
      <AddCommentForm />
      <CommentsList comments={comments} />
    </>
  );
};

export default PostComments;

import { FC } from "react";
import { CircularProgress } from "@mui/material";

import { IComment } from "../../../models/comment";
import CommentsList from "../../comments/comments-list";
import AddCommentForm from "../../forms/add-comment-form";

interface PostCommentsProps {
  comments?: IComment[];
}

const PostComments: FC<PostCommentsProps> = ({ comments }) => {
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

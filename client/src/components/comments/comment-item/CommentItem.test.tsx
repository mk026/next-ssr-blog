import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import CommentItem from ".";
import { IComment } from "../../../models/comment";
import { IUser } from "../../../models/user";
import { setupStore } from "../../../store";

it("Should render CommentItem", () => {
  const fakeAuthor: IUser = {
    id: 1,
    avatarUrl: "fake_avatar_url",
    bio: "Fake User Bio",
    createdAt: new Date().toLocaleString(),
    email: "fake_user_email",
    name: "Fake User",
    updatedAt: new Date().toLocaleString(),
  };
  const fakeComment: IComment = {
    id: 1,
    author: fakeAuthor,
    content: "Fake Comment Text",
    createdAt: new Date().toLocaleString(),
    postId: 1,
    updatedAt: new Date().toLocaleString(),
  };
  const store = setupStore();

  render(
    <Provider store={store}>
      <CommentItem comment={fakeComment} />
    </Provider>
  );

  const element = screen.getByText(fakeComment.content);

  expect(element).toBeInTheDocument();
});

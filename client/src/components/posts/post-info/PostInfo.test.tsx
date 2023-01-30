import { render, screen } from "@testing-library/react";

import PostInfo from ".";
import { ICategory } from "../../../models/category";
import { IPost } from "../../../models/post";
import { IUser } from "../../../models/user";

it("Should render PostInfo", () => {
  const fakeAuthor: IUser = {
    id: 1,
    avatarUrl: "fake_avatar_url",
    bio: "Fake User Bio",
    email: "fake_user_email",
    name: "Fake User",
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };
  const fakeCategory: ICategory = {
    id: 1,
    title: "Fake Category",
  };
  const fakePost: IPost = {
    id: 1,
    author: fakeAuthor,
    category: fakeCategory,
    title: "Fake Title",
    content: "Fake Content",
    description: "Fake Description",
    views: 1,
    tags: [],
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  render(<PostInfo post={fakePost} />);

  const postViewsText = screen.getByText(`Views: ${fakePost.views}`);

  expect(postViewsText).toBeInTheDocument();
});

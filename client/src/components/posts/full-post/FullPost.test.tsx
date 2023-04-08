import { render, screen } from "@testing-library/react";

import FullPost from ".";
import { ICategory } from "../../../models/category";
import { IPost } from "../../../models/post";
import { IUser } from "../../../models/user";

it("Should render FullPost", () => {
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
    excerpt: "Fake Excerpt",
    views: 1,
    tags: [],
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  render(<FullPost post={fakePost} />);

  const element = screen.getByText(fakePost.title);

  expect(element).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";

import UserMenu from ".";

it("Should render UserMenu", () => {
  const profileButtonText = "Profile";
  const postsButtonText = "Posts";
  const bookmarksButtonText = "Bookmarks";
  const signoutButtonText = "Signout";

  render(<UserMenu />);

  const profileButton = screen.getByText(profileButtonText);
  const postsButton = screen.getByText(postsButtonText);
  const bookmarksButton = screen.getByText(bookmarksButtonText);
  const signoutButton = screen.getByText(signoutButtonText);

  expect(profileButton).toBeInTheDocument();
  expect(postsButton).toBeInTheDocument();
  expect(bookmarksButton).toBeInTheDocument();
  expect(signoutButton).toBeInTheDocument();
});

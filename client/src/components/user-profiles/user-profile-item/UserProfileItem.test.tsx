import { render, screen } from "@testing-library/react";

import UserProfileItem from ".";
import { IUser } from "../../../models/user";

it("Should render UserProfileItem", () => {
  const fakeUser: IUser = {
    id: 1,
    avatarUrl: "fake_avatar_url",
    bio: "Fake User Bio",
    email: "fake_user_email",
    name: "Fake User",
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  };

  render(<UserProfileItem user={fakeUser} />);

  const element = screen.getByText(fakeUser.name);

  expect(element).toBeInTheDocument();
});

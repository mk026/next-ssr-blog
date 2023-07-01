import { render, screen } from "@testing-library/react";

import UserProfilesList from ".";

it("Should render UserProfilesList", () => {
  const noUsersFallbackText = "No users found";

  render(<UserProfilesList users={[]} />);

  const element = screen.getByText(noUsersFallbackText);

  expect(element).toBeInTheDocument();
});

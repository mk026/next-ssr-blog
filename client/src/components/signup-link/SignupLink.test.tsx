import { render, screen } from "@testing-library/react";

import SignupLink from ".";

it("Should render SignupLink", () => {
  const linkText = "Signup";

  render(<SignupLink />);

  const element = screen.getByText(linkText);

  expect(element).toBeInTheDocument();
});

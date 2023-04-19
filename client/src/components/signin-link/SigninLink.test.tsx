import { render, screen } from "@testing-library/react";

import SigninLink from ".";

it("Should render SigninLink", () => {
  const linkText = "Signin";

  render(<SigninLink />);

  const element = screen.getByText(linkText);

  expect(element).toBeInTheDocument();
});

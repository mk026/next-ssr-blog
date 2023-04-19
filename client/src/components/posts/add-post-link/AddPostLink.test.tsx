import { render, screen } from "@testing-library/react";

import AddPostLink from ".";

it("Should render AddPostLink", () => {
  const linkText = "Add new post";

  render(<AddPostLink />);

  const element = screen.getByText(linkText);

  expect(element).toBeInTheDocument();
});

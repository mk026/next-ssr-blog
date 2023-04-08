import { render, screen } from "@testing-library/react";

import PostsList from ".";

it("Should render PostsList", () => {
  const noPostsFallbackText = "No posts found";

  render(<PostsList posts={[]} />);

  const element = screen.getByText(noPostsFallbackText);

  expect(element).toBeInTheDocument();
});

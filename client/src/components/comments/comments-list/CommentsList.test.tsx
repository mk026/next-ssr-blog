import { render, screen } from "@testing-library/react";

import CommentsList from ".";

it("Should render CommentsList", () => {
  const noCommentsFallbackText = "No comments yet";

  render(<CommentsList />);

  const element = screen.getByText(noCommentsFallbackText);

  expect(element).toBeInTheDocument();
});

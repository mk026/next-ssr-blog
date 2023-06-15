import { render, screen } from "@testing-library/react";

import TagsList from ".";
import { ITag } from "../../../models/tag";

it("Should render TagsList", () => {
  const fakeTags: ITag[] = [
    { id: 1, title: "tag 1" },
    { id: 2, title: "tag 2" },
    { id: 3, title: "tag 3" },
  ];

  render(<TagsList tags={fakeTags} />);

  const element = screen.getByTestId("tagslist");

  expect(element).toBeInTheDocument();
});

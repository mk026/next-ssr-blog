import { render, screen } from "@testing-library/react";

import TagItem from ".";
import { ITag } from "../../../models/tag";

it("Should render TagItem", () => {
  const fakeTag: ITag = { id: 1, title: "tag 1" };

  render(<TagItem tag={fakeTag} />);

  const element = screen.getByText(fakeTag.title);

  expect(element).toBeInTheDocument();
});

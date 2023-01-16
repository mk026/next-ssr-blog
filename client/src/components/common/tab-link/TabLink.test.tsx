import { render, screen } from "@testing-library/react";

import TabLink from ".";

it("Should render TabLink", () => {
  const tabHref = "/tab_href";
  const tabLabel = "Tab Label";

  render(<TabLink value={null} href={tabHref} label={tabLabel} />);

  const element = screen.getByText(tabLabel);

  expect(element).toBeInTheDocument();
  expect(element).toHaveAttribute("href", tabHref);
});

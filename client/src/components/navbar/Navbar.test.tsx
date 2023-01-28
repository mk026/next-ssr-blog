import { render, screen } from "@testing-library/react";

import Navbar from ".";

it("Should render Navbar", () => {
  render(<Navbar />);

  const navbar = screen.getByRole("navigation");

  expect(navbar).toBeInTheDocument();
});

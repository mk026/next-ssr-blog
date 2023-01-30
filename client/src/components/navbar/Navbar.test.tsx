import { render, screen } from "@testing-library/react";

import Navbar from ".";

jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/posts" }),
}));

it("Should render Navbar", () => {
  render(<Navbar />);

  const navbar = screen.getByRole("navigation");

  expect(navbar).toBeInTheDocument();
});

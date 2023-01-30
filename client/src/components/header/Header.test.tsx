import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import Header from ".";
import { setupStore } from "../../store";

jest.mock("next/router", () => ({
  useRouter: () => ({ pathname: "/posts" }),
}));

it("Should render Header", () => {
  const store = setupStore();

  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const header = screen.getByTestId("header");

  expect(header).toBeInTheDocument();
});

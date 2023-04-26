import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import SignoutButton from ".";
import { setupStore } from "../../store";

it("Should render SignoutButton", () => {
  const store = setupStore();
  const buttonText = "Signout";

  render(
    <Provider store={store}>
      <SignoutButton />
    </Provider>
  );

  const element = screen.getByText(buttonText);

  expect(element).toBeInTheDocument();
});

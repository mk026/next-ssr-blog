import { render, screen } from "@testing-library/react";

import FormField from ".";

it("Should render FormField", () => {
  const fieldName = "Field Name";
  const fieldLabel = "Field Label";

  render(<FormField name={fieldName} label={fieldLabel} />);

  const element = screen.getByText(fieldLabel);

  expect(element).toBeInTheDocument();
});

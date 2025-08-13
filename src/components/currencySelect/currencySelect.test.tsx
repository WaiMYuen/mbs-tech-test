import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CurrencySelect from "./currencySelect";

const currencies = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Pound Sterling" },
];

describe("CurrencySelect", () => {
  test("renders placeholder when no value is selected", () => {
    render(
      <CurrencySelect
        value=""
        onChange={vi.fn()}
        currencies={currencies}
        placeholder="Select currency"
      />
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("Select currency");
  });

  test("renders selected currency text", () => {
    render(
      <CurrencySelect
        value="USD"
        onChange={vi.fn()}
        currencies={currencies}
      />
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("US Dollar (USD)");
  });

  test("opens popover and selects a currency", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <CurrencySelect
        value="USD"
        onChange={handleChange}
        currencies={currencies}
      />
    );

    const button = screen.getByRole("combobox");
    await user.click(button);

    expect(screen.getByText("Euro (EUR)")).toBeInTheDocument();

    await user.click(screen.getByText("Euro (EUR)"));
    expect(handleChange).toHaveBeenCalledWith("EUR");
  });

  test("shows loading state", () => {
    render(
      <CurrencySelect
        value=""
        onChange={vi.fn()}
        currencies={currencies}
        loading={true}
      />
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("Loading...");
  });
});

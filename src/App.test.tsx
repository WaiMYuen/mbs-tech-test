import { render, screen } from "@testing-library/react";
import App from "./App";

vi.mock("@/components/currencyPickers/currencyPickers", () => ({
  default: () => <div data-testid="currency-pickers" />,
}));

vi.mock("@/components/amountForm/amountForm", () => ({
  default: () => <div data-testid="amount-form" />,
}));

vi.mock("@/components/conversionResult/conversionResult", () => ({
  default: () => <div data-testid="conversion-result" />,
}));

describe("App", () => {
  it("renders all main components", () => {
    render(<App />);

    expect(screen.getByTestId("currency-pickers")).toBeInTheDocument();
    expect(screen.getByTestId("amount-form")).toBeInTheDocument();
    expect(screen.getByTestId("conversion-result")).toBeInTheDocument();
  });
});

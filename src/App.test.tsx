import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock child components to isolate App tests
vi.mock("./components/currencyPickers", () => ({
  default: () => <div data-testid="currency-pickers" />,
}));

vi.mock("./components/amountForm", () => ({
  default: () => <div data-testid="amount-form" />,
}));

vi.mock("./components/conversionResult", () => ({
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

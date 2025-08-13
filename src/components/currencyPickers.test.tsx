import { render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import CurrencyPickers from "./currencyPickers";
import { conversionSlice } from "@/features/conversion/conversionSlice";

vi.mock("@/services/currencyApi")

describe("CurrencyPickers", () => {
  test("renders CurrencyPickers component", () => {
    const store = configureStore({
      reducer: {
        conversion: conversionSlice.reducer,
      },
      preloadedState: {
        conversion: {
          baseCurrency: "USD",
          targetCurrency: "EUR",
          amount: "",
        },
      },
    });

    render(
      <Provider store={store}>
        <CurrencyPickers />
      </Provider>
    );

    expect(screen.getByText("US Dollar (USD)")).toBeInTheDocument();
    expect(screen.getByText("Euro (EUR)")).toBeInTheDocument();
  });
});

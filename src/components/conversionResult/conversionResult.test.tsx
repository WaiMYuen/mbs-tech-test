import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import ConversionResult from "./conversionResult";
import { conversionSlice } from "@/features/conversion/conversionSlice";

import * as currencyApi from "@/services/currencyApi";
import type { Mock } from "vitest";

vi.mock("@/services/currencyApi");

describe("ConversionResult", () => {
  it("renders conversion correctly", () => {
    const store = configureStore({
      reducer: { conversion: conversionSlice.reducer },
      preloadedState: {
        conversion: { baseCurrency: "USD", targetCurrency: "EUR", amount: "10" },
      },
    });

    render(
      <Provider store={store}>
        <ConversionResult />
      </Provider>
    );

    expect(screen.getByText("1 USD = 0.95 EUR")).toBeInTheDocument();
    expect(screen.getByText("10 USD = 9.50 EUR")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    (currencyApi.useGetRatesQuery as Mock).mockReturnValueOnce({
      data: undefined,
      isLoading: true,
      error: undefined,
    });

    const store = configureStore({
      reducer: { conversion: conversionSlice.reducer },
      preloadedState: {
        conversion: { baseCurrency: "USD", targetCurrency: "EUR", amount: "10" },
      },
    });

    render(
      <Provider store={store}>
        <ConversionResult />
      </Provider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("shows error state", () => {
    (currencyApi.useGetRatesQuery as Mock).mockReturnValueOnce({
      data: undefined,
      isLoading: false,
      error: true,
    });

    const store = configureStore({
      reducer: { conversion: conversionSlice.reducer },
      preloadedState: {
        conversion: { baseCurrency: "USD", targetCurrency: "EUR", amount: "10" },
      },
    });

    render(
      <Provider store={store}>
        <ConversionResult />
      </Provider>
    );

    expect(screen.getByText("Error fetching rates")).toBeInTheDocument();
  });
});

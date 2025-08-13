import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CurrencySelectContainer from "./currencySelectContainer";
import { conversionSlice } from "@/features/conversion/conversionSlice";

import * as currencyApi from "@/services/currencyApi";
import type { Mock } from "vitest";

vi.mock("@/services/currencyApi");


describe("CurrencySelectContainer", () => {
  const store = configureStore({
    reducer: { conversion: conversionSlice.reducer },
    preloadedState: {
      conversion: { baseCurrency: "USD", targetCurrency: "EUR", amount: "10" },
    },
  });

  const onChangeMock = vi.fn();

  test("renders CurrencySelect with options from mocked API", () => {
    render(
      <Provider store={store}>
        <CurrencySelectContainer
          value="USD"
          onChange={onChangeMock}
          baseCode="USD"
        />
      </Provider>
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("US Dollar");
  });

  test("renders loading state when isLoading is true", () => {
    (currencyApi.useGetRatesQuery as Mock).mockReturnValue({
      data: null,
      isLoading: true,
      isError: false,
    });

    render(
      <Provider store={store}>
        <CurrencySelectContainer
          value="USD"
          onChange={onChangeMock}
          baseCode="USD"
        />
      </Provider>
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("Loading...");
  });

  test("renders error state when isError is true", () => {
    (currencyApi.useGetRatesQuery as Mock).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
    });

    render(
      <Provider store={store}>
        <CurrencySelectContainer
          value="USD"
          onChange={onChangeMock}
          baseCode="USD"
        />
      </Provider>
    );

    expect(screen.getByText(/Failed to load currency data/i)).toBeInTheDocument();
  });

  test("includes GBP when includeBase is true", () => {
    (currencyApi.useGetRatesQuery as Mock).mockReturnValue({
      data: { usd: { code: "USD", name: "US Dollar" } },
      isLoading: false,
      isError: false,
    });

    render(
      <Provider store={store}>
        <CurrencySelectContainer
          value="GBP"
          onChange={onChangeMock}
          baseCode="gbp"
          includeBase
        />
      </Provider>
    );

    expect(screen.getByRole("combobox")).toHaveTextContent("U.K. Pound Sterling");
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import AmountForm from "./amountForm";
import { conversionSlice } from "@/features/conversion/conversionSlice";

describe("AmountForm", () => {
  const store = configureStore({
      reducer: { conversion: conversionSlice.reducer },
      preloadedState: {
        conversion: { baseCurrency: "USD", targetCurrency: "EUR", amount: "10" },
      },
    });
  test("renders the amount input and submit button", () => {
    render(
      <Provider store={store}>
        <AmountForm />
      </Provider>
    );

    expect(screen.getByLabelText(/Amount/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("submit button is enabled when a valid input is entered", async () => {
    render(
      <Provider store={store}>
        <AmountForm />
      </Provider>
    );

    const input = screen.getByLabelText(/Amount/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    // Initially disabled
    expect(submitButton).toBeDisabled();

    // Enter a valid number
    await userEvent.type(input, "42");

    // Button should now be enabled
    expect(submitButton).toBeEnabled();
  });

  test("submit button remains disabled for invalid input", async () => {
    render(
      <Provider store={store}>
        <AmountForm />
      </Provider>
    );

    const input = screen.getByLabelText(/Amount/i);
    const submitButton = screen.getByRole("button", { name: /Submit/i });

    await userEvent.type(input, "invalid");

    expect(submitButton).toBeDisabled();
  });
});

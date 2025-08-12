import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency, setTargetCurrency } from "../features/conversion/conversionSlice";
import { RootState } from "../app/store";
import CurrencySelect from "./currencySelect";

export function CurrencyPickers() {
  const dispatch = useDispatch();
  const { baseCurrency, targetCurrency } = useSelector(
    (state: RootState) => state.conversion
  );

  return (
    <div className="flex items-center space-x-4">
      <CurrencySelect
        value={baseCurrency}
        onChange={(val) => dispatch(setBaseCurrency(val))}
        fetchBaseCode="gbp"
      />
      <CurrencySelect
        value={targetCurrency}
        onChange={(val) => dispatch(setTargetCurrency(val))}
        fetchBaseCode={baseCurrency}
      />
    </div>
  );
}

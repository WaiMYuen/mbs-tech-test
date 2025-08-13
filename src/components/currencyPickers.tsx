import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency, setTargetCurrency } from "../features/conversion/conversionSlice";
import { RootState } from "../app/store";
import CurrencySelectContainer from "./currencySelect/currencySelectContainer";

export function CurrencyPickers() {
  const dispatch = useDispatch();
  const { baseCurrency, targetCurrency } = useSelector(
    (state: RootState) => state.conversion
  );

  return (
    <div className="flex items-center space-x-4">
      <CurrencySelectContainer
        value={baseCurrency}
        onChange={(val) => dispatch(setBaseCurrency(val))}
        baseCode="gbp"
        includeBase
      />
      <CurrencySelectContainer
        value={targetCurrency}
        onChange={(val) => dispatch(setTargetCurrency(val))}
        baseCode={baseCurrency}
        filterOut={baseCurrency}
      />
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useGetRatesQuery } from "../services/currencyApi";

export default function ConversionResult() {
  const { baseCurrency, targetCurrency, amount } = useSelector(
    (state: RootState) => state.conversion
  );

  const { data, isLoading, error } = useGetRatesQuery(baseCurrency);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching rates</p>;
  if (!data || !(targetCurrency.toLowerCase() in data)) return null;

  const converted = parseFloat(amount) * data[targetCurrency.toLowerCase()].rate;

  return (
    <p className="text-lg font-semibold">
      {amount} {baseCurrency} = {converted.toFixed(2)} {targetCurrency}
    </p>
  );
}

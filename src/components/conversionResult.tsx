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

  const exampleConversion = 1 * data[targetCurrency.toLowerCase()].rate
  const converted = parseFloat(amount) * data[targetCurrency.toLowerCase()].rate;

  return (
    <div className="mt-4 p-4 rounded shadow-md bg-indigo-300">
      <p className="text-md ">
        {1} {baseCurrency} = {exampleConversion.toFixed(2)} {targetCurrency}
      </p>
      <h2 className="text-2xl font-bold">
        {amount} {baseCurrency} = {converted.toFixed(2)} {targetCurrency}
      </h2>
    </div>
  );
}

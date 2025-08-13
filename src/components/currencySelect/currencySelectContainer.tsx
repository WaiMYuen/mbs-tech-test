import { useGetRatesQuery } from "../../services/currencyApi"
import CurrencySelect from "./currencySelect"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Props {
  value: string;
  onChange: (value: string) => void;
  baseCode: string;
  includeBase?: boolean;
  filterOut?: string;
}

export default function CurrencySelectContainer({
  value,
  onChange,
  baseCode,
  includeBase = false,
  filterOut,
}: Props) {
  const { data, isLoading, isError } = useGetRatesQuery(baseCode);

  if (isError) {
    return (
      <Alert variant="destructive" className="max-w-sm">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load currency data for {baseCode}. Please try again.
        </AlertDescription>
      </Alert>
    );
  }

  let currencyOptions = data ? Object.values(data).map((currency) => ({
    code: currency.code,
    name: currency.name,
  })) : [];

  if (includeBase) {
    if (baseCode === "gbp") {
      currencyOptions.unshift({ code: "GBP", name: "U.K. Pound Sterling" })
    } else {
    currencyOptions.unshift({ code: baseCode, name: baseCode });
    }
  }

  if (filterOut) {
    currencyOptions = currencyOptions.filter(
      (option) => option.code !== filterOut.toUpperCase()
    );
  }

  // Deduplicate
  currencyOptions = currencyOptions.filter(
    (option, index, array) =>
      array.findIndex((o) => o.code === option.code) === index
  );

  return (
    <CurrencySelect
      value={value}
      onChange={onChange}
      currencies={currencyOptions}
      loading={isLoading}
    />
  );
}

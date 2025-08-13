import { useGetRatesQuery } from "../../services/currencyApi"
import CurrencySelect from "./currencySelect"

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface Props {
  value: string;
  onChange: (value: string) => void;
  baseCode: string;
  includeBase?: boolean;
}

export default function CurrencySelectContainer({
  value,
  onChange,
  baseCode,
  includeBase = false,
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

  const currencyOptions = data ? Object.values(data).map((currency) => ({
    code: currency.code,
    name: currency.name,
  })) : [];

  if (includeBase && baseCode === "gbp") {
    currencyOptions.unshift({ code: "GBP", name: "U.K. Pound Sterling" })
  }

  return (
    <div className="p-2 lg:p-4 m-0">
      <CurrencySelect
        value={value}
        onChange={onChange}
        currencies={currencyOptions}
        loading={isLoading}
      />
    </div>
  );
}

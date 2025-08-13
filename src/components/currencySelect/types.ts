export type CurrencyOption = { code: string; name: string };

export type CurrencySelectProps = {
  value: string;
  onChange: (value: string) => void;
  currencies: CurrencyOption[];
  placeholder?: string;
  loading?: boolean;
}
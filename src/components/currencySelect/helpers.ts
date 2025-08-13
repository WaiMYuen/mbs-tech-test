  import type { CurrencyOption } from "./types";

  export const isGBPSelected = (selectedCurrency: CurrencyOption) => {
    return selectedCurrency.code === 'gbp' ? "U.K. Pound Sterling (GBP)" : `${selectedCurrency.name} (${selectedCurrency.code})`
  }
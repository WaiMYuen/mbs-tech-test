  export const isGBPSelected = (selectedCurrency: {name: string, code: string}) => {
    return selectedCurrency.code === 'gbp' ? "U.K. Pound Sterling (GBP)" : `${selectedCurrency.name} (${selectedCurrency.code})`
  }
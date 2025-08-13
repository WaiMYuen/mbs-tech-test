import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit"

type ConversionState = {
  baseCurrency: string;
  targetCurrency: string;
  amount: string;
}

const initialState: ConversionState = {
  baseCurrency: 'GBP',
  targetCurrency: 'USD',
  amount: "1"
}

export const conversionSlice = createSlice({
  name: 'conversion',
  initialState,
  reducers: {
    setBaseCurrency: (state, action: PayloadAction<string>) => {
      state.baseCurrency = action.payload
    },
    setTargetCurrency: (state, action: PayloadAction<string>) => {
      state.targetCurrency = action.payload
    },
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload
    }
  }
})

export const { setBaseCurrency, setTargetCurrency, setAmount } = conversionSlice.actions

export default conversionSlice.reducer
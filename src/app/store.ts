import { configureStore } from "@reduxjs/toolkit"
import { currencyApi } from "@/services/currencyApi"
import conversionReducer from "@/features/conversion/conversionSlice"

export const store = configureStore({
  reducer:{
    conversion: conversionReducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
  },
    middleware: getDefaultMiddleware => 
      getDefaultMiddleware().concat(currencyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
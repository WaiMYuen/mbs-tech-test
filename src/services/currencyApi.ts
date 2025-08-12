import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type CurrencyRate = {
  code: string;
  alphaCode: string;
  numericCode: string;
  name: string;
  rate: number;
  date: string;
  inverseRate: number;
}

export type CurrencyResponse = Record<string, CurrencyRate>;

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.floatrates.com/daily/' }),
  endpoints: (builder) => ({
    getRates: builder.query<CurrencyResponse, string>({
      query: (baseCode) => `${baseCode.toLowerCase()}.json`,
    }),
  }),
});

export const { useGetRatesQuery } = currencyApi;

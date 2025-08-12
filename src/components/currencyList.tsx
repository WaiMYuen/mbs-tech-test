import React from 'react';
import { useGetRatesQuery } from '../services/currencyApi';

export default function CurrencyList() {
  const { data, error, isLoading } = useGetRatesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <ul>
      {data &&
        Object.entries(data).map(([code, rate]) => (
          <li key={code}>
            {code.toUpperCase()}: {rate.rate.toFixed(4)}
          </li>
        ))}
    </ul>
  );
}

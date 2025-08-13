export const useGetRatesQuery = vi.fn(() => ({
  data: {
    usd: { code: "USD", alphaCode: "USD", numericCode: "840", name: "US Dollar", rate: 1, date: "2025-08-13", inverseRate: 1 },
    eur: { code: "EUR", alphaCode: "EUR", numericCode: "978", name: "Euro", rate: 0.95, date: "2025-08-13", inverseRate: 1.05 },
  },
  isLoading: false,
  error: undefined,
}));

import React, { useState } from "react"
import "./App.css"
import { CurrencyPickers } from "./components/currencyPickers"
import AmountForm from "./components/amountForm"
import ConversionResult from "./components/conversionResult"

export default function App() {
  return (
    <div className="App">
      <AmountForm />
      <CurrencyPickers />
      <ConversionResult />
    </div>
  )
}

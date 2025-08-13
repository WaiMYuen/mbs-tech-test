import React, { useState } from "react"
import "./App.css"
import { CurrencyPickers } from "./components/currencyPickers"
import AmountForm from "./components/amountForm"
import ConversionResult from "./components/conversionResult"

export default function App() {
  return (
    <div className="center min-h-screen flex justify-center flex-col items-center ">
      <div className="flex content-between bg-indigo-200 flex-col items-center max-w-screen-sm p-3 rounded">
        <CurrencyPickers />
        <AmountForm />
      </div>
        <ConversionResult />
    </div>
  )
}

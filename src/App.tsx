import React, { useState } from "react"
import "./App.css"
import CurrencyList from "./components/currencyList"

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("")
  return (
    <div className="App">
      <CurrencyList
        value={selectedCurrency}
        onChange={setSelectedCurrency}
      />
    </div>
  )
}

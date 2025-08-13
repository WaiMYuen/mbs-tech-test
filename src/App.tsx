import CurrencyPickers from "@/components/currencyPickers/currencyPickers"
import AmountForm from "@/components/amountForm/amountForm"
import ConversionResult from "@/components/conversionResult/conversionResult"

export default function App() {
  return (
    <div className="center min-h-screen flex justify-center flex-col items-center ">
      <div className="flex content-between bg-indigo-200 flex-col items-center max-w-screen-sm p-3 rounded drop-shadow-lg">
        <CurrencyPickers />
        <AmountForm />
      </div>
        <ConversionResult />
    </div>
  )
}

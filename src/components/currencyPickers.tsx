import { useDispatch, useSelector } from "react-redux";
import { setBaseCurrency, setTargetCurrency } from "../features/conversion/conversionSlice";
import { RootState } from "../app/store";
import CurrencySelectContainer from "./currencySelect/currencySelectContainer";
import { ArrowRightLeft  } from "lucide-react";

export default function CurrencyPickers() {
  const dispatch = useDispatch();
  const { baseCurrency, targetCurrency } = useSelector(
    (state: RootState) => state.conversion
  );

  return (
    <div className="flex items-center space-x-4 flex-col lg:flex-row">
      <CurrencySelectContainer
        value={baseCurrency}
        onChange={(val) => dispatch(setBaseCurrency(val))}
        baseCode="gbp"
        includeBase
      />
      <ArrowRightLeft className="m-0" />
      <CurrencySelectContainer
        value={targetCurrency}
        onChange={(val) => dispatch(setTargetCurrency(val))}
        baseCode={baseCurrency}
      />
    </div>
  );
}

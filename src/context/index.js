import { createContext } from "react";

const CalculatorContext = createContext({
  mode: "",
  num1: "",
  num2: "",
  action: "",
  result: "",
  changeMode: () => {},
  onChangeNum: () => {},
  onChangeAction: () => {},
  onEqual: () => {},
  onClear: () => {},
});

export default CalculatorContext;

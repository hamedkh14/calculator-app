import { useState } from "react";
import { CalculatorStyle, ContainerStyle } from "./styles/styles";
import CalculatorContext from "./context";
import ModeControlComponent from "./components/ModeControlComponent";
import getDesignTokens from "./themes/theme";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import KeyboardComponent from "./components/keyboard/KeyboardComponent";
import ScreenComponent from "./components/ScreenComponent";

function App() {
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(isDarkModeEnabled ? "dark" : "light");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");

  const ThemeMode = createTheme(getDesignTokens(mode));

  //Toggle dark mode
  const changeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    console.log(1);
  };

  // Set Numbers
  const onChangeNum = (numChange) => {
    console.log(numChange);
    if (action === "") {
      const newNumber1 = num1 + numChange;
      setNum1(newNumber1);
    } else {
      const newNumber2 = num2 + numChange;
      setNum2(newNumber2);
    }
  };

  // Action
  const onChangeAction = (actChange) => {
    if (result !== "") {
      setNum1(result);
      setNum2("");
      setResult("");
      setAction(actChange);
    } else if (num1 !== "" && num2 === "") {
      setAction(actChange);
    }
  };

  //Equal
  const onEqual = () => {
    if (num1 === "" || num2 === "" || action === "") return;

    var equal;
    if (action === "+") {
      equal = num1 * 1 + num2 * 1;
    } else if (action === "-") {
      equal = num1 - num2;
    } else if (action === "/") {
      equal = num1 / num2;
    } else {
      equal = num1 * num2;
    }

    setResult(equal);
  };

  // Clear result or action or num1 or num2
  const onClear = () => {
    if (result !== "") {
      setNum1("");
      setNum2("");
      setAction("");
      setResult("");
    } else if (num2 !== "") {
      var newNum2 = num2.slice(0, -1);
      setNum2(newNum2);
    } else if (action !== "") {
      setAction("");
    } else {
      var newNum1 = num1.slice(0, -1);
      setNum1(newNum1);
    }
  };

  return (
    <>
      <CalculatorContext.Provider
        value={{
          mode,
          num1,
          num2,
          action,
          result,
          changeMode,
          onChangeNum,
          onChangeAction,
          onEqual,
          onClear,
        }}
      >
        <ThemeProvider theme={ThemeMode}>
          <CssBaseline />
          <ContainerStyle>
            <CalculatorStyle>
              <ModeControlComponent />
              <ScreenComponent />
              <KeyboardComponent />
            </CalculatorStyle>
          </ContainerStyle>
        </ThemeProvider>
      </CalculatorContext.Provider>
    </>
  );
}

export default App;

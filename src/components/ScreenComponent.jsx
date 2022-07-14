import {useContext} from 'react'
import CalculatorContext from '../context'
import { ScreenStyle } from '../styles/styles';

export default function ScreenComponent() {
  const context = useContext(CalculatorContext);
  return (
    <>
      <ScreenStyle>
        {context.num1} {context.action} {context.num2} {context.result && "="} {context.result}
      </ScreenStyle>
    </>
  )
}

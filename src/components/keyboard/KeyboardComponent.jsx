import React from 'react';
import { useContext } from 'react';
import CalculatorContext from '../../context';
import { KeyboardStyle } from "../../styles/styles";
import NumberButtonComponent from './NumberButtonComponent';
import ActionButtonComponent from './ActionButtonComponent';

export default function KeyboardComponent() {
  const context = useContext(CalculatorContext);
  const keyboardItems = [7,8,9,'/',4,5,6,'*',1,2,3,'-',0,'c','=','+'];
  return (
    <>
      <KeyboardStyle>
        {keyboardItems.map((item) => {
          if (typeof item === 'number') {
            return <NumberButtonComponent number={item} />
          }else {
            return <ActionButtonComponent action={item} />
          }
        })}
      </KeyboardStyle>
    </>
  )
}

import React from 'react'
import { useContext } from 'react';
import CalculatorContext from '../../context';
import { NumberButtonStyle } from '../../styles/styles';

export default function NumberButtonComponent({number}) {
  const context = useContext(CalculatorContext);
  return (
    <NumberButtonStyle onClick={() => context.onChangeNum(number)}>{number}</NumberButtonStyle>
  )
}

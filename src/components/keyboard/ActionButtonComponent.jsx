import { useContext } from 'react';
import CalculatorContext from '../../context';
import { ActionButtonStyle } from '../../styles/styles';
import { FiDivide, FiDelete } from "react-icons/fi";
import { TiEqualsOutline, TiPlusOutline, TiMinusOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";

export default function ActionButtonComponent({action}) {
  const context = useContext(CalculatorContext);
  let ActionIcon;
  let onClickAction;

  if(action === "*") {
    ActionIcon = <MdClose />;
    onClickAction = () => context.onChangeAction("*");
  }else if(action === "/") {
    ActionIcon = <FiDivide />;
    onClickAction = () => context.onChangeAction("/");
  }else if(action === "-") {
    ActionIcon = <TiMinusOutline />;
    onClickAction = () => context.onChangeAction("-");
  }else if(action === "+") {
    ActionIcon = <TiPlusOutline />;
    onClickAction = () => context.onChangeAction("+");
  }else if(action === "=") {
    ActionIcon = <TiEqualsOutline />;
    onClickAction = context.onEqual;
  }else {
    ActionIcon = <FiDelete />;
    onClickAction = context.onClear;
  }
  
  return (
    <ActionButtonStyle onClick={onClickAction}>
      {ActionIcon}
    </ActionButtonStyle>
  )
}

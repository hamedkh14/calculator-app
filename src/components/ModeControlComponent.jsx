import { FormControlLabel } from '@mui/material';
import React from 'react';
import CalculatorContext from '../context';
import { useContext } from 'react';
import { MaterialUISwitchStyle, ModeControlStyle } from '../styles/styles';

function ModeControlComponent() {
  const context = useContext(CalculatorContext);
  return (
    <ModeControlStyle>
      <FormControlLabel onClick={context.changeMode}
        control={<MaterialUISwitchStyle sx={{ m: 1 }} defaultChecked />}
      />
    </ModeControlStyle>
  );
}

export default ModeControlComponent;
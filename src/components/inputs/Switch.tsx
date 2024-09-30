import React from 'react';
import MUISwitch, { SwitchProps as MUISwitchProps } from '@mui/material/Switch';

export interface SwitchProps extends MUISwitchProps {
  // Add any custom props here
}

export const Switch: React.FC<SwitchProps> = ({ 
  color = 'primary',
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  return (
    <MUISwitch 
      color={color}
      size={size}
      disabled={disabled}
      {...props}
    />
  );
};
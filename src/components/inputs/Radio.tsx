import React from 'react';
import MUIRadio, { RadioProps as MUIRadioProps } from '@mui/material/Radio';

export interface RadioProps extends MUIRadioProps {
  // Add any custom props here
}

export const Radio: React.FC<RadioProps> = ({ 
  color = 'primary',
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  return (
    <MUIRadio 
      color={color}
      size={size}
      disabled={disabled}
      {...props}
    />
  );
};
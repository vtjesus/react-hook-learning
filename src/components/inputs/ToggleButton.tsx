import React from 'react';
import MUIToggleButton, { ToggleButtonProps as MUIToggleButtonProps } from '@mui/material/ToggleButton';

export interface ToggleButtonProps extends MUIToggleButtonProps {
  // Add any custom props here
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ 
  children,
  color = 'standard',
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  return (
    <MUIToggleButton 
      color={color}
      size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </MUIToggleButton>
  );
};
import React from 'react';
import MUITextField, { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

export interface TextFieldProps extends MUITextFieldProps {
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  disabled?: boolean;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary';
}

export const TextField: React.FC<TextFieldProps> = ({ 
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  return (
    <MUITextField 
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default TextField;
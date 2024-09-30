import React from 'react';
import MUISelect, { SelectProps as MUISelectProps } from '@mui/material/Select';

export interface SelectProps extends Omit<MUISelectProps, 'variant'> {
  variant?: 'standard' | 'outlined' | 'filled';
  autoWidth?: boolean;
  defaultOpen?: boolean;
  displayEmpty?: boolean;
  IconComponent?: React.ElementType;
  labelId?: string;
  MenuProps?: Partial<MenuProps>;
  multiple?: boolean;
  native?: boolean;
  open?: boolean;
  renderValue?: (value: SelectProps['value']) => React.ReactNode;
  SelectDisplayProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Select: React.FC<SelectProps> = ({ 
  children,
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  return (
    <MUISelect 
      variant={variant}
      size={size}
      disabled={disabled}
      {...props}
    >
      {children}
    </MUISelect>
  );
};
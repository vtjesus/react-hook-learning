import React from 'react';
import { Chip as MuiChip } from '@mui/material';

//q: what is interface ChipProps?
//a: ChipProps is an interface that defines the props that the Chip component accepts.
export interface ChipProps {
  label: string;
  onDelete?: boolean;
  variant?: 'outlined' | 'contained';
}

//q: what is React.FC?
//a: React.FC is a generic type that is used to define the type of the props that a functional component accepts.
const Chip: React.FC<ChipProps> = ({ label, onDelete, variant = 'contained' }) => {
  return (
    <MuiChip
      label={label}
      onDelete={onDelete}
      variant={variant}
    />
  );
};

export default Chip;
import React from 'react';
import { Divider as MuiDivider } from '@mui/material';

export interface DividerProps {
  variant?: 'fullWidth' | 'inset' | 'middle';
  orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({ variant = 'fullWidth', orientation = 'horizontal' }) => {
  return (
    <MuiDivider 
      variant={variant}
      orientation={orientation}
    />
  );
};

export default Divider;
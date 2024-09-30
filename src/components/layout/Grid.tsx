import React from 'react';
import Grid, { GridProps as MUIGridProps } from '@mui/material/Grid';

export interface GridProps extends MUIGridProps {
  // Add any custom props here
}

export const MUIGrid: React.FC<GridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};
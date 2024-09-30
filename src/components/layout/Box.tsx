import React from 'react';
import Box, { BoxProps as MUIBoxProps } from '@mui/material/Box';

export interface BoxProps extends MUIBoxProps {
  // Add any custom props here
}

export const MUIBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
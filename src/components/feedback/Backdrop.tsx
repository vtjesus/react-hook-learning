import React from 'react';
import Backdrop, { BackdropProps as MUIBackdropProps } from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export interface BackdropProps extends MUIBackdropProps {
  loading?: boolean;
}

export const MUIBackdrop: React.FC<BackdropProps> = ({ loading = false, children, ...props }) => {
  return (
    <Backdrop {...props}>
      {loading && <CircularProgress color="inherit" />}
      {children}
    </Backdrop>
  );
};
import React from 'react';
import Snackbar, { SnackbarProps as MUISnackbarProps } from '@mui/material/Snackbar';
import Alert, { AlertProps } from '@mui/material/Alert';

export interface SnackbarProps extends MUISnackbarProps {
  message?: string;
  severity?: AlertProps['severity'];
}

export const MUISnackbar: React.FC<SnackbarProps> = ({ message, severity, ...props }) => {
  return (
    <Snackbar {...props}>
      {severity ? (
        <Alert severity={severity} onClose={props.onClose}>
          {message}
        </Alert>
      ) : (
        message
      )}
    </Snackbar>
  );
};
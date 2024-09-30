import React from 'react';
import Alert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export interface AlertProps extends MUIAlertProps {
  title?: string;
}

export const MUIAlert: React.FC<AlertProps> = ({ title, children, ...props }) => {
  return (
    <Alert {...props}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </Alert>
  );
};

export default MUIAlert;
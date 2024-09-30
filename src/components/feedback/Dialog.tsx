import React from 'react';
import Dialog, { DialogProps as MUIDialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

export interface DialogProps extends MUIDialogProps {
  title?: string;
  content?: string;
  actions?: React.ReactNode;
}

export const MUIDialog: React.FC<DialogProps> = ({ title, content, actions, children, ...props }) => {
  return (
    <Dialog {...props}>
      {title && <DialogTitle>{title}</DialogTitle>}
      {content && <DialogContent>{content}</DialogContent>}
      {actions && <DialogActions>{actions}</DialogActions>}
      {children}
    </Dialog>
  );
};
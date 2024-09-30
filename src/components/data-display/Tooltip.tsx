import React from 'react';
import Tooltip, { TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';

export interface TooltipProps extends MUITooltipProps {
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
}

export const MUITooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  return <Tooltip {...props}>{children}</Tooltip>;
};
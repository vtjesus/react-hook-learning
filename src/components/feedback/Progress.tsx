import React from 'react';
import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

export interface ProgressProps {
  type: 'circular' | 'linear';
  circularProps?: CircularProgressProps;
  linearProps?: LinearProgressProps;
}

export const MUIProgress: React.FC<ProgressProps> = ({ type, circularProps, linearProps }) => {
  return (
    <>
      {type === 'circular' && <CircularProgress {...circularProps} />}
      {type === 'linear' && <LinearProgress {...linearProps} />}
    </>
  );
};
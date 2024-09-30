import React from 'react';
import Skeleton, { SkeletonProps as MUISkeletonProps } from '@mui/material/Skeleton';

export interface SkeletonProps extends MUISkeletonProps {}

export const MUISkeleton: React.FC<SkeletonProps> = (props) => {
  return <Skeleton {...props} />;
};
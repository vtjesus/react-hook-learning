import React from 'react';
import Container, { ContainerProps as MUIContainerProps } from '@mui/material/Container';

export interface ContainerProps extends MUIContainerProps {
  // Add any custom props here
}

export const MUIContainer: React.FC<ContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};
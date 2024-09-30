import React from 'react';
import ButtonGroup, { ButtonGroupProps as MUIButtonGroupProps } from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export interface ButtonGroupProps extends MUIButtonGroupProps {
  buttons: Array<{ label: string }>;
}

export const MUIButtonGroup: React.FC<ButtonGroupProps> = ({ buttons, ...props }) => {
  return (
    <ButtonGroup {...props}>
      {buttons.map((button, index) => (
        <Button key={index}>{button.label}</Button>
      ))}
    </ButtonGroup>
  );
};
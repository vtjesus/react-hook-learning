import React from 'react';
import MUISlider, { SliderProps as MUISliderProps } from '@mui/material/Slider';

export interface SliderProps extends MUISliderProps {
  // Add any custom props here
}

export const Slider: React.FC<SliderProps> = ({ 
  color = 'primary',
  size = 'medium',
  disabled = false,
  min = 0,
  max = 100,
  ...props 
}) => {
  return (
    <MUISlider 
      color={color}
      size={size}
      disabled={disabled}
      min={min}
      max={max}
      {...props}
    />
  );
};
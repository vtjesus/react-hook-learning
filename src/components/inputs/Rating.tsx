import React from 'react';
import MUIRating, { RatingProps as MUIRatingProps } from '@mui/material/Rating';

export interface RatingProps extends MUIRatingProps {
  // Add any custom props here
}

export const Rating: React.FC<RatingProps> = ({ 
  size = 'medium',
  disabled = false,
  max = 5,
  ...props 
}) => {
  return (
    <MUIRating 
      size={size}
      disabled={disabled}
      max={max}
      {...props}
    />
  );
};
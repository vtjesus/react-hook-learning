import React from 'react';
import { AccessAlarm, Home } from '@mui/icons-material';

interface IconProps {
  name: string;
  fontSize?: 'small' | 'medium' | 'large';
  color?: string;
}

const Icons: React.FC<IconProps> = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default Icons;
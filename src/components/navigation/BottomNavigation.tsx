import React from 'react';
import MUIBottomNavigation, { BottomNavigationProps as MUIBottomNavigationProps } from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export interface BottomNavigationProps extends MUIBottomNavigationProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ value, onChange, ...props }) => {
  return (
    <MUIBottomNavigation value={value} onChange={onChange} {...props}>
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </MUIBottomNavigation>
  );
};

export default BottomNavigation;
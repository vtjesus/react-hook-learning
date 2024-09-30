import React from 'react';
import MUIFab, { FabProps as MUIFabProps } from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

export type FabIconType = 'add' | 'edit' | 'favorite' | 'navigation' | React.ReactNode;

export interface FabProps extends Omit<MUIFabProps, 'children'> {
  icon?: FabIconType;
  label?: string;
}

const getIcon = (icon: FabIconType) => {
  if (React.isValidElement(icon)) return icon;
  switch (icon) {
    case 'add': return <AddIcon />;
    case 'edit': return <EditIcon />;
    case 'favorite': return <FavoriteIcon />;
    case 'navigation': return <NavigationIcon />;
    default: return null;
  }
};

export const Fab: React.FC<FabProps> = ({ 
  icon,
  label,
  color = 'default',
  size = 'medium',
  variant = 'circular',
  disabled = false,
  ...props 
}) => {
  return (
    <MUIFab 
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {getIcon(icon)}
      {label && variant === 'extended' && <span style={{ marginLeft: '8px' }}>{label}</span>}
    </MUIFab>
  );
};
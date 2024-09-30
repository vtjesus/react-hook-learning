import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export interface MenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  items: { text: string; onClick: () => void }[];
}

const CustomMenu: React.FC<MenuProps> = ({ anchorEl, open, onClose, items }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {items.map((item, index) => (
        <MenuItem key={index} onClick={item.onClick}>
          {item.text}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CustomMenu;
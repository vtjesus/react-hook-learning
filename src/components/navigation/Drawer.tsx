import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  items: { text: string }[];
}

const CustomDrawer: React.FC<DrawerProps> = ({ open, onClose, items }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {items.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
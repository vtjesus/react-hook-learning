import React from 'react';
import List, { ListProps as MUIListProps } from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export interface ListProps extends MUIListProps {}

export const MUIList: React.FC<ListProps> = ({ children, ...props }) => {
  return <List {...props}>{children}</List>;
};
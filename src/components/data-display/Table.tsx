import React from 'react';
import Table, { TableProps as MUITableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface TableProps extends MUITableProps {}

export const MUITable: React.FC<TableProps> = ({ children, ...props }) => {
  return <Table {...props}>{children}</Table>;
};
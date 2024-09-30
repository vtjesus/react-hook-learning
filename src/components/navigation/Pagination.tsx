import React from 'react';
import Pagination, { PaginationProps as MUIPaginationProps } from '@mui/material/Pagination';

export interface PaginationProps extends MUIPaginationProps {}

const CustomPagination: React.FC<PaginationProps> = (props) => {
  return <Pagination {...props} />;
};

export default CustomPagination;
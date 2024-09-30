import React from 'react';
import Breadcrumbs, { BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export interface BreadcrumbsProps extends MUIBreadcrumbsProps {
  items: { label: string; href?: string }[];
}

const BreadcrumbsComponent: React.FC<BreadcrumbsProps> = ({ items, ...props }) => {
  return (
    <Breadcrumbs {...props}>
      {items.map((item, index) => (
        item.href ? (
          <Link key={index} color="inherit" href={item.href}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index} color="textPrimary">
            {item.label}
          </Typography>
        )
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
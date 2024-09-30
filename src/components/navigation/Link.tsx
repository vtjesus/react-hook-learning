import React from 'react';
import Link, { LinkProps as MUILinkProps } from '@mui/material/Link';

export interface LinkProps extends MUILinkProps {
  text: string;
}

const CustomLink: React.FC<LinkProps> = ({ text, ...props }) => {
  return (
    <Link {...props}>
      {text}
    </Link>
  );
};

export default CustomLink;
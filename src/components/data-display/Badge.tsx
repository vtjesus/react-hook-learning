import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

interface BadgeProps {
  badgeContent?: number;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  variant?: 'dot' | 'standard';
}

const SimpleBadge: React.FC<BadgeProps> = ({
  badgeContent = 4,
  color = 'primary',
  invisible = false,
  max = 99,
  showZero = false,
  variant = 'standard',
}) => {
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      invisible={invisible}
      max={max}
      showZero={showZero}
      variant={variant}
    >
      <MailIcon color="action" />
    </Badge>
  );
};

export default SimpleBadge;
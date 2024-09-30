import React from 'react';
import MUIAvatar, { AvatarProps as MUIAvatarProps } from '@mui/material/Avatar';

export interface AvatarProps extends MUIAvatarProps {
  // Add any custom props here
}

const Avatar: React.FC<AvatarProps> = ({ 
  src,
  alt,
  sx,
  ...props
}) => {
  return (
    <MUIAvatar
      src={src}
      alt={alt}
      sx={{ 
        ...sx,
        width: props.width ?? 50,
        height: props.height ?? 50,
      }}
      {...props}
    />
  );
};

export default Avatar;

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import CustomMenu, { MenuProps } from '../../components/navigation/Menu';
import Button from '@mui/material/Button';

export default {
  title: 'Navigation/Menu',
  component: CustomMenu,
} as Meta;

const Template: Story<MenuProps> = (args) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick}>Open Menu</Button>
      <CustomMenu {...args} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Profile', onClick: () => alert('Profile clicked') },
    { text: 'My account', onClick: () => alert('My account clicked') },
    { text: 'Logout', onClick: () => alert('Logout clicked') },
  ],
};
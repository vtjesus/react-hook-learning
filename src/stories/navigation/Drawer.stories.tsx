import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import CustomDrawer, { DrawerProps } from '../../components/navigation/Drawer';
import Button from '@mui/material/Button';

export default {
  title: 'Navigation/Drawer',
  component: CustomDrawer,
} as Meta;

const Template: Story<DrawerProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Drawer</Button>
      <CustomDrawer {...args} open={open} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
  ],
};
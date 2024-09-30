import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { MUIDialog, DialogProps } from '../../components/feedback/Dialog';
import Button from '@mui/material/Button';

export default {
  title: 'Feedback/Dialog',
  component: MUIDialog,
  argTypes: {
    open: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<DialogProps> = (args) => {
  const [open, setOpen] = useState(args.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Dialog
      </Button>
      <MUIDialog {...args} open={open} onClose={handleClose}>
        {args.children}
      </MUIDialog>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  title: 'Default Dialog',
  content: 'This is a default dialog content.',
  actions: (
    <>
      <Button onClick={() => {}}>Cancel</Button>
      <Button onClick={() => {}}>Ok</Button>
    </>
  ),
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  open: false,
  title: 'Custom Dialog',
  content: 'This is a custom dialog content.',
  actions: (
    <>
      <Button onClick={() => {}}>Close</Button>
    </>
  ),
};
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { MUISnackbar, SnackbarProps } from '../../components/feedback/Snackbar';
import Button from '@mui/material/Button';

export default {
  title: 'Feedback/Snackbar',
  component: MUISnackbar,
  argTypes: {
    open: {
      control: 'boolean',
    },
    message: {
      control: 'text',
    },
    severity: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'info', 'success'],
      },
    },
  },
} as Meta;

const Template: Story<SnackbarProps> = (args) => {
  const [open, setOpen] = useState(args.open);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Show Snackbar
      </Button>
      <MUISnackbar {...args} open={open} onClose={handleClose} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: false,
  message: 'This is a default snackbar message.',
};

export const WithSeverity = Template.bind({});
WithSeverity.args = {
  open: false,
  message: 'This is a snackbar with severity.',
  severity: 'success',
};
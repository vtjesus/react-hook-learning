import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUIBackdrop, BackdropProps } from '../../components/feedback/Backdrop';
import Button from '@mui/material/Button';

export default {
  title: 'Feedback/Backdrop',
  component: MUIBackdrop,
  argTypes: {
    open: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<BackdropProps> = (args) => (
  <div>
    <Button variant="contained" onClick={() => args.open = !args.open}>
      Toggle Backdrop
    </Button>
    <MUIBackdrop {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  loading: false,
  children: null,
};

export const WithLoading = Template.bind({});
WithLoading.args = {
  open: true,
  loading: true,
  children: null,
};
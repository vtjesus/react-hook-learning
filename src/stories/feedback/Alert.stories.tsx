import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUIAlert, AlertProps } from '../../components/feedback/Alert';

export default {
  title: 'Feedback/Alert',
  component: MUIAlert,
  argTypes: {
    severity: {
      control: {
        type: 'select',
        options: ['error', 'warning', 'info', 'success'],
      },
    },
    title: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <MUIAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  severity: 'info',
  children: 'This is an info alert — check it out!',
};

export const WithTitle = Template.bind({});
WithTitle.args = {
  severity: 'success',
  title: 'Success',
  children: 'This is a success alert with a title — check it out!',
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  severity: 'error',
  children: 'This is an error alert — check it out!',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  severity: 'warning',
  children: 'This is a warning alert — check it out!',
};
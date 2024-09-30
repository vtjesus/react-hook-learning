import React from 'react';
import { Meta, Story } from '@storybook/react';
import TextField, { TextFieldProps } from '../../components/inputs/TextField';

export default {
  title: 'Inputs/TextField',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default TextField',
  variant: 'outlined',
  size: 'medium',
  disabled: false,
  fullWidth: false,
};

export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled TextField',
  variant: 'filled',
  size: 'medium',
  disabled: false,
  fullWidth: false,
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small TextField',
  variant: 'outlined',
  size: 'small',
  disabled: false,
  fullWidth: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled TextField',
  variant: 'outlined',
  size: 'medium',
  disabled: true,
  fullWidth: false,
};
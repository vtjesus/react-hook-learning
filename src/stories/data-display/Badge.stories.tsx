import React from 'react';
import { Meta, Story } from '@storybook/react';
import Badge from '../../components/data-display/Badge'; // Adjust the import path based on your project structure
import { BadgeProps } from '@mui/material/Badge'; // Use MUI's BadgeProps

export default {
  title: 'Data Display/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Badge',
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Badge',
  color: 'primary',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Badge',
  color: 'error',
};
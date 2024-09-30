import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUIProgress, ProgressProps } from '../../components/feedback/Progress';

export default {
  title: 'Feedback/Progress',
  component: MUIProgress,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['circular', 'linear'],
      },
    },
    circularProps: {
      control: 'object',
    },
    linearProps: {
      control: 'object',
    },
  },
} as Meta;

const Template: Story<ProgressProps> = (args) => <MUIProgress {...args} />;

export const Circular = Template.bind({});
Circular.args = {
  type: 'circular',
  circularProps: {
    color: 'primary',
    size: 40,
  },
};

export const Linear = Template.bind({});
Linear.args = {
  type: 'linear',
  linearProps: {
    color: 'secondary',
  },
};
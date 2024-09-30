import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUISkeleton, SkeletonProps } from '../../components/feedback/Skeleton';

export default {
  title: 'Feedback/Skeleton',
  component: MUISkeleton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['text', 'rectangular', 'circular'],
      },
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
} as Meta;

const Template: Story<SkeletonProps> = (args) => <MUISkeleton {...args} />;

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  width: 210,
  height: 60,
};

export const Rectangular = Template.bind({});
Rectangular.args = {
  variant: 'rectangular',
  width: 210,
  height: 118,
};

export const Circular = Template.bind({});
Circular.args = {
  variant: 'circular',
  width: 40,
  height: 40,
};
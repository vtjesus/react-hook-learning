import React from 'react';
import { Meta, Story } from '@storybook/react';
import Divider, { DividerProps } from '../../components/data-display/Divider';

export default {
  title: 'Data Display/Divider',
  component: Divider,
  argTypes: {
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
};
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Icons from '../../components/data-display/Icons';

export default {
  title: 'Foundations/Icons',
  component: Icons,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icons {...args} />;

export const Default = Template.bind({});
Default.args = {
  fontSize: 'medium',
  color: 'black',
};
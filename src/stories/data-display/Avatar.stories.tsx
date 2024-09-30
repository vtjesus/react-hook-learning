import React from 'react';
import { Meta, Story } from '@storybook/react';
import Avatar, { AvatarProps } from '../../components/data-display/Avatar';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'number' },
  },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Default Avatar',
  size: 50,
};

export const Large = Template.bind({});
Large.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Large Avatar',
  size: 100,
};
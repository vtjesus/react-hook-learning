import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomLink, { LinkProps } from '../../components/navigation/Link';

export default {
  title: 'Navigation/Link',
  component: CustomLink,
} as Meta;

const Template: Story<LinkProps> = (args) => <CustomLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
  href: 'https://www.example.com',
  target: '_blank',
};
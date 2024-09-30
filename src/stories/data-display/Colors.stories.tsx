import React from 'react';
import { Meta, Story } from '@storybook/react';
import Colors from '../../components/data-display/Colors';

export default {
  title: 'Foundations/Colors',
  component: Colors,
} as Meta;

const Template: Story = () => <Colors />;

export const Default = Template.bind({});
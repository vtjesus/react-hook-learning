import React from 'react';
import { Meta, Story } from '@storybook/react';
import Chip from '../../components/data-display/Chip';
import { ChipProps } from '../../components/data-display/Chip';

export default {
  title: 'Data Display/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onDelete: { 
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'contained'],
    },
  },
} as Meta;

//q: what is Template?
//a: Template is a function that is used to render the component with the props that are passed to it.
const Template: Story<ChipProps> = (args) => <Chip {...args} />;

//q: what is Default?
//a: Default is a story that is used to render the component with the default props.
export const Default = Template.bind({});
//q: what is Template.bind?
//a: Template.bind is a function that is used to bind the props to the component.

//q: what is Default.args?
//a: Default.args is an object that contains the default props that are passed to the component.
Default.args = {
  label: 'Default Chip',
  variant: 'outlined',
};

export const Deletable = Template.bind({});
Deletable.args = {
  label: 'Deletable Chip',
  onDelete: () => alert('Chip deleted'),
};
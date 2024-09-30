import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUIList } from '../../components/data-display/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default {
  title: 'Data Display/List',
  component: MUIList,
  argTypes: {
    dense: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <MUIList {...args}>
    <ListItem>
      <ListItemText primary="Item 1" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Item 2" />
    </ListItem>
    <ListItem>
      <ListItemText primary="Item 3" />
    </ListItem>
  </MUIList>
);

export const Default = Template.bind({});
Default.args = {
  dense: false,
};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};
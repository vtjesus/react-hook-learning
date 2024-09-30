import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUITooltip } from '../../components/data-display/Tooltip';
import Button from '@mui/material/Button';

export default {
  title: 'Data Display/Tooltip',
  component: MUITooltip,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        options: ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'],
      },
    },
    arrow: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <MUITooltip {...args}>
    <Button variant='contained'>Hover over me</Button>
  </MUITooltip>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Default Tooltip',
  placement: 'bottom',
  arrow: false,
};

export const WithCustomPlacement = Template.bind({});
WithCustomPlacement.args = {
  title: 'Tooltip with custom placement',
  placement: 'right',
  arrow: false,
};

export const WithArrow = Template.bind({});
WithArrow.args = {
  title: 'Tooltip with arrow',
  placement: 'bottom',
  arrow: true,
};
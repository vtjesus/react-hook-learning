import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../components/inputs/Select';
import MenuItem from '@mui/material/MenuItem';

const meta: Meta<typeof Select> = {
  title: 'Inputs/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    children: [
      <MenuItem value={10}>Ten</MenuItem>,
      <MenuItem value={20}>Twenty</MenuItem>,
      <MenuItem value={30}>Thirty</MenuItem>
    ],
    defaultValue: 10,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
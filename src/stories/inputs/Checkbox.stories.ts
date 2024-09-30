import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../../components/inputs/Checkbox'; // Removed MUICheckbox

const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    size: { 
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    value: { control: 'text' },
  },
  args: { 
    checked: false, 
    disabled: false, 
    indeterminate: false, 
    size: 'medium', 
    label: 'Checkbox' // Default label
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};


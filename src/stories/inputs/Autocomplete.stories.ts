import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MUIAutocomplete } from '../../components/inputs/Autocomplete';

const meta: Meta<typeof MUIAutocomplete> = {
  title: 'Inputs/Autocomplete',
  component: MUIAutocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Add any specific argTypes for Autocomplete
  },
  args: { onChange: fn() },
} satisfies Meta<typeof MUIAutocomplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select an option',
  },
};

export const WithInitialValue: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    label: 'Select an option',
    defaultValue: 'Option 2',
  },
};

// Add more stories as needed
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { MUIButtonGroup } from '../../components/inputs/ButtonGroup';

const meta: Meta<typeof MUIButtonGroup> = {
  title: 'Inputs/ButtonGroup',
  component: MUIButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Add any specific argTypes for ButtonGroup
  },
  args: { onClick: fn() },
} satisfies Meta<typeof MUIButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttons: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ],
  },
};

export const Vertical: Story = {
  args: {
    buttons: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ],
    orientation: 'vertical',
  },
};

export const WithVariant: Story = {
  args: {
    buttons: [
      { label: 'One' },
      { label: 'Two' },
      { label: 'Three' },
    ],
    variant: 'contained',
  },
};

// Add more stories as needed
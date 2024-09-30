import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Fab } from '../../components/inputs/Fab';

const meta: Meta<typeof Fab> = {
  title: 'Inputs/Fab',
  component: Fab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['circular', 'extended'],
    },
    icon: {
      control: 'select',
      options: ['add', 'edit', 'favorite', 'navigation'],
    },
    disabled: { control: 'boolean' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Fab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'add',
  },
};

export const Primary: Story = {
  args: {
    icon: 'edit',
    color: 'primary',
  },
};

export const Extended: Story = {
  args: {
    icon: 'favorite',
    variant: 'extended',
    label: 'Favorite',
  },
};

export const Small: Story = {
  args: {
    icon: 'add',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    icon: 'navigation',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    icon: 'add',
    disabled: true,
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../components/inputs/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Inputs/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    disableRipple: { control: 'boolean' },
    borderRadius: { control: 'number' },
    textTransform: {
      control: 'select',
      options: ['none', 'capitalize', 'uppercase', 'lowercase'],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    // textTransform: 'none',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'outlined',
  },
};

export const Tertiary: Story = {
  args: {
    label: "Button",
    variant: "text"
  }
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
    variant: "contained",
  },
};

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'medium',
    variant: "contained",
  },
};


export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
    variant: "contained",
  },
};

export const NoRipple: Story = {
  args: {
    label: 'No Ripple',
    variant: 'contained',
    disableRipple: true,
  },
};

export const CustomBorderRadius: Story = {
  args: {
    label: 'Rounded Button',
    variant: 'contained',
    borderRadius: 20,
  },
};

export const UppercaseText: Story = {
  args: {
    label: 'Uppercase',
    variant: 'contained',
    textTransform: 'uppercase',
  },
};


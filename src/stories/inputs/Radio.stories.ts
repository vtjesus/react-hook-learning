import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../../components/inputs/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Inputs/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
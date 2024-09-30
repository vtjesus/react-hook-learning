import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '../../components/inputs/Rating';

const meta: Meta<typeof Rating> = {
  title: 'Inputs/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const Precision: Story = {
  args: {
    value: 3.5,
    precision: 0.5,
  },
};
import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from '../../components/inputs/ToggleButton';
import FormatBoldIcon from '@mui/icons-material/FormatBold';

const meta: Meta<typeof ToggleButton> = {
  title: 'Inputs/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  args: {
    children: <FormatBoldIcon />,
    value: 'bold',
    size: 'small',
  },
};

export const Selected: Story = {
  args: {
    ...Default.args,
    selected: true,
  },
};
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupProps } from '../../components/inputs/RadioGroup';

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
} as Meta;

const Template: Story<RadioGroupProps> = (args) => {
  const [value, setValue] = useState(args.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, newValue: string) => {
    setValue(newValue);
  };

  return <RadioGroup {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  name: 'options',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3', disabled: true },
  ],
  value: 'option1',
  row: false,
};
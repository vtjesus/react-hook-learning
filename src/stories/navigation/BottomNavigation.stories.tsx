import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import BottomNavigation, { BottomNavigationProps } from '../../components/navigation/BottomNavigation';

export default {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
} as Meta;

const Template: Story<BottomNavigationProps> = (args) => {
  const [value, setValue] = useState(0);
  return <BottomNavigation {...args} value={value} onChange={(event, newValue) => setValue(newValue)} />;
};

export const Default = Template.bind({});
Default.args = {
  value: 0,
  onChange: (event, newValue) => console.log(newValue),
};
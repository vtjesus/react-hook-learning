import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import CustomTabs, { TabsProps } from '../../components/navigation/Tabs';

export default {
  title: 'Navigation/Tabs',
  component: CustomTabs,
} as Meta;

const Template: Story<TabsProps> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return <CustomTabs {...args} value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { label: 'Tab 1' },
    { label: 'Tab 2' },
    { label: 'Tab 3' },
  ],
};
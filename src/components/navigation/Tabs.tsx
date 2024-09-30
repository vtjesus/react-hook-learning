import React from 'react';
import Tabs, { TabsProps as MUITabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export interface TabsProps extends MUITabsProps {
  tabs: { label: string }[];
}

const CustomTabs: React.FC<TabsProps> = ({ tabs, ...props }) => {
  return (
    <Tabs {...props}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
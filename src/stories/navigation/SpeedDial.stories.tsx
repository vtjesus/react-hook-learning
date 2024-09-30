import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomSpeedDial, { SpeedDialProps } from '../../components/navigation/SpeedDial';

export default {
  title: 'Navigation/SpeedDial',
  component: CustomSpeedDial,
} as Meta;

const Template: Story<SpeedDialProps> = (args) => <CustomSpeedDial {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
};
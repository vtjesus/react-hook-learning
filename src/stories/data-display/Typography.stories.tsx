import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typography from '../../components/data-display/Typography';

export default {
  title: 'Foundations/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const AllVariants = Template.bind({});
AllVariants.args = {
  text: 'Sample Text',
};
import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomPagination, { PaginationProps } from '../../components/navigation/Pagination';

export default {
  title: 'Navigation/Pagination',
  component: CustomPagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <CustomPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 10,
  page: 1,
  onChange: (event, page) => console.log(page),
};
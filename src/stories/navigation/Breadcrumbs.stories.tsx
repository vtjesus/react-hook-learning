import React from 'react';
import { Meta, Story } from '@storybook/react';
import BreadcrumbsComponent, { BreadcrumbsProps } from '../../components/navigation/Breadcrumbs';

export default {
  title: 'Navigation/Breadcrumbs',
  component: BreadcrumbsComponent,
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => <BreadcrumbsComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Catalog', href: '/catalog' },
    { label: 'Accessories', href: '/catalog/accessories' },
    { label: 'Shoes' },
  ],
};
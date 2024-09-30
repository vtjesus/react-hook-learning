import React from 'react';
import { Meta, Story } from '@storybook/react';
import CustomDataGrid, { DataGridProps } from '../../components/data-display/DataGrid';
import { GridColDef } from '@mui/x-data-grid';

export default {
    title: 'Data Display/DataGrid',
    component: CustomDataGrid,
} as Meta;

const Template: Story<DataGridProps> = (args) => <CustomDataGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  rows: [
    { id: 1, col1: 'Hello', col2: 'World', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 2, col1: 'DataGrid', col2: 'Material-UI', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 3, col1: 'XGrid', col2: 'is Awesome', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 4, col1: 'React', col2: 'Library', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 5, col1: 'Storybook', col2: 'Tool', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 6, col1: 'TypeScript', col2: 'Language', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 7, col1: 'JavaScript', col2: 'Language', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 8, col1: 'HTML', col2: 'Markup', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 9, col1: 'CSS', col2: 'Style', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' },
    { id: 10, col1: 'Webpack', col2: 'Bundler', col3: 'Value 1', col4: 'Value 2', col5: 'Value 3', col6: 'Value 4', col7: 'Value 5' }
  ],
  columns: [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
    { field: 'col3', headerName: 'Column 3', width: 150 },
    { field: 'col4', headerName: 'Column 4', width: 150 },
    { field: 'col5', headerName: 'Column 5', width: 150 },
    { field: 'col6', headerName: 'Column 6', width: 150 },
    { field: 'col7', headerName: 'Column 7', width: 150 }
  ] as GridColDef[],
  pageSize: 5,
};
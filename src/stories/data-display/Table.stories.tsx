import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MUITable } from '../../components/data-display/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default {
  title: 'Data Display/Table',
  component: MUITable,
} as Meta;

const Template: Story = (args) => (
  <TableContainer component={Paper}>
    <MUITable {...args} />
  </TableContainer>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
          <TableCell>Header 3</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Row 1, Cell 1</TableCell>
          <TableCell>Row 1, Cell 2</TableCell>
          <TableCell>Row 1, Cell 3</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Row 2, Cell 1</TableCell>
          <TableCell>Row 2, Cell 2</TableCell>
          <TableCell>Row 2, Cell 3</TableCell>
        </TableRow>
      </TableBody>
    </>
  ),
};

export const WithData = Template.bind({});
WithData.args = {
  children: (
    <>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>30</TableCell>
          <TableCell>New York</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Jane Smith</TableCell>
          <TableCell>25</TableCell>
          <TableCell>San Francisco</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sam Johnson</TableCell>
          <TableCell>35</TableCell>
          <TableCell>Chicago</TableCell>
        </TableRow>
      </TableBody>
    </>
  ),
};
import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Colors: React.FC = () => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token Name</TableCell>
            <TableCell>Swatch</TableCell>
            <TableCell>Hex Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(colors).map((colorKey) => {
            const color = colors[colorKey as keyof typeof colors];
            if (typeof color === 'object' && color !== null) {
              return Object.keys(color).map((shade) => {
                const shadeColor = color[shade as keyof typeof color];
                if (typeof shadeColor === 'string') {
                  return (
                    <TableRow key={`${colorKey}-${shade}`}>
                      <TableCell>{`${colorKey}-${shade}`}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            backgroundColor: shadeColor,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            border: '1px solid #eee',
                          }}
                        />
                      </TableCell>
                      <TableCell>{shadeColor}</TableCell>
                    </TableRow>
                  );
                }
                return null;
              });
            }
            if (typeof color === 'string') {
              return (
                <TableRow key={colorKey}>
                  <TableCell>{colorKey}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor: color,
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                      }}
                    />
                  </TableCell>
                  <TableCell>{color}</TableCell>
                </TableRow>
              );
            }
            return null;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Colors;
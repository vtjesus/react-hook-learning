import React from 'react';
import { Typography as MUITypography } from '@mui/material';

interface TypographyProps {
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
}

const Typography: React.FC<TypographyProps> = ({ text }) => {
  return (
    <div>
      <MUITypography variant="h1">{text} - h1</MUITypography>
      <MUITypography variant="h2">{text} - h2</MUITypography>
      <MUITypography variant="h3">{text} - h3</MUITypography>
      <MUITypography variant="h4">{text} - h4</MUITypography>
      <MUITypography variant="h5">{text} - h5</MUITypography>
      <MUITypography variant="h6">{text} - h6</MUITypography>
      <MUITypography variant="subtitle1">{text} - subtitle1</MUITypography>
      <MUITypography variant="subtitle2">{text} - subtitle2</MUITypography>
      <MUITypography variant="body1">{text} - body1</MUITypography>
      <MUITypography variant="body2">{text} - body2</MUITypography>
      <MUITypography variant="caption">{text} - caption</MUITypography>
      <MUITypography variant="button">{text} - button</MUITypography>
      <MUITypography variant="overline">{text} - overline</MUITypography>
    </div>
  );
};

export default Typography;
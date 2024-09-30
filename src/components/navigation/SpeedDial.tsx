import React from 'react';
import SpeedDial, { SpeedDialProps as MUISpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

export interface SpeedDialProps extends MUISpeedDialProps {}

const CustomSpeedDial: React.FC<SpeedDialProps> = (props) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SpeedDialIcon />}
      {...props}
    >
      <SpeedDialAction
        icon={<FileCopyIcon />}
        tooltipTitle="Copy"
        onClick={() => alert('Copy')}
      />
      <SpeedDialAction
        icon={<SaveIcon />}
        tooltipTitle="Save"
        onClick={() => alert('Save')}
      />
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
        onClick={() => alert('Print')}
      />
      <SpeedDialAction
        icon={<ShareIcon />}
        tooltipTitle="Share"
        onClick={() => alert('Share')}
      />
    </SpeedDial>
  );
};

export default CustomSpeedDial;
import React from 'react';
import { FormControl, FormLabel, RadioGroup as MUIRadioGroup, FormControlLabel } from '@mui/material';
import { Radio, RadioProps } from './Radio';

export interface RadioGroupProps {
  label: string;
  name: string;
  options: { label: string; value: string; disabled?: boolean }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  row?: boolean;
  radioProps?: RadioProps;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  row = false,
  radioProps = {},
}) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <MUIRadioGroup name={name} value={value} onChange={onChange} row={row}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio {...radioProps} disabled={option.disabled} />}
            label={option.label}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
};
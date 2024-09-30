import React from 'react';
import Autocomplete, { AutocompleteProps as MUIAutocompleteProps } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export interface AutocompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
> extends Omit<MUIAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
  // Add any custom props here
  label?: string;
}

export function MUIAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>({ label, ...props }: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return (
    <Autocomplete
      {...props}
      style={{ width: '200px' }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
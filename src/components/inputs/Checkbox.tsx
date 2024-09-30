import React from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MUICheckboxProps } from '@mui/material';

export interface CheckboxProps extends MUICheckboxProps {
    label?: string; // Custom label prop
    disabled?: boolean; // Add disabled prop
    indeterminate?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, disabled, ...muiProps }) => {
    return (
        <label>
            <MuiCheckbox disabled={disabled} {...muiProps} />
            {label} {/* Render the label if provided */}
        </label>
    );
};
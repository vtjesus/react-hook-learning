import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';

interface DataGridProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    pageSize?: number;
    pageSizeOptions?: number[];
    checkboxSelection?: boolean;
    disableRowSelectionOnClick?: boolean;
}

const CustomDataGrid: React.FC<DataGridProps> = ({ rows, columns, pageSize = 5 }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </div>
    );
};

export default CustomDataGrid;
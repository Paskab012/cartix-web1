/* eslint-disable array-callback-return */
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import DATA from './CONSENT_MOCK.json';
import { COLUMNS } from './columns';
import './table.css';

export default function SavingGroupsTable() {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => DATA, []);

    const tableInstance = useTable({
        columns,
        data,
    });

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

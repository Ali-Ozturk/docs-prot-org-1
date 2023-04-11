import React from 'react';
import {useTable} from "react-table";

const Table = ({columns, data}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        allColumns
    } = useTable({
        columns,
        data,
    })

    return (
        <>
            <div>
                {allColumns.map(column => (
                    <div key={column.id}>
                        <label>
                            <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
                            {column.Header}
                        </label>
                    </div>
                ))}
                <br/>
            </div>
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    );
};

export default Table;
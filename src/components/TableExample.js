import React from 'react';
import Table from "./Table";

const TableExample = ({ companyName, columns }) => {
    const defaultColumns = React.useMemo(
        () => [
            {
                Header: 'RACI',
                columns: [
                    {
                        Header: 'Area',
                        accessor: 'area',
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                    },
                    {
                        Header: companyName ?? 'Company',
                        accessor: 'company',
                    },
                    {
                        Header: 'Client',
                        accessor: 'client',
                    },
                    {
                        Header: 'Vendor',
                        accessor: 'vendor',
                    },
                ],
            },
        ],
        []
    )

    const data = [
        {
            "area": "Platform Management",
            "description": "Managing and organizing the platform related tasks",
            "company": "",
            "client": "I",
            "vendor": "A,R"
        },
        {
            "area": "Incident Management",
            "description": "Managing support tickets",
            "company": "A,R",
            "client": "C",
            "vendor": ""
        }
    ]

    const utilAutoHeader = ( headerList ) => {
        return headerList.map(column => ({
            Header: column,
            accessor: column.toLowerCase(),
        }));
        //         <Table columns={utilAutoHeader(["Area", "Description", "Company", "Client", "Vendor"])} data={data} />
    }

    const tableColumns = columns ? utilAutoHeader(columns) : defaultColumns;

    return (
        <div>
            <Table columns={tableColumns} data={data} />
        </div>
    );
};

export default TableExample;
import { Box, Chip } from '@mui/material';

import { TableColumn, Transaction } from './Transactions.type';

export const transactionColumns: TableColumn<Transaction>[] = [
    {
        key: 'type',
        label: 'Transaction',
        render: (_value, row) => {
            let text = '';
            if (row.type === 'Refund') {
                text = 'refund to';
            } else if (row.type === 'Failed') {
                text = 'failed from';
            } else {
                text = 'from';
            }

            return (
                <Box>
                    Payment {text} <strong>{row.name}</strong>
                </Box>
            );
        },
    },
    {
        key: 'date',
        label: 'Date & Time',
        render: (value) => {
            const formattedDate = new Date(value as string).toLocaleDateString(
                'en-US',
                {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                },
            );
            return formattedDate.replace(/(\d{1,2}) (\d{4})/, '$1, $2');
        },
    },
    {
        key: 'amount',
        label: 'Amount',
        align: 'right',
        render: (value) => (
            <strong>
                {Number(value) < 0 ? '-' : ''}
                {Math.abs(Number(value)).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    useGrouping: false,
                })}
            </strong>
        ),
    },
    {
        key: 'status',
        label: 'Status',
        align: 'right',
        render: (value) => {
            const status = value as Transaction['status'];
            const colorMap: Record<
                Transaction['status'],
                'success' | 'warning' | 'info'
            > = {
                Completed: 'success',
                Cancelled: 'warning',
                'In progress': 'info',
            };

            return (
                <Chip label={status} color={colorMap[status]} size="small" />
            );
        },
    },
];

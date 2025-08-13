import { TableColumn, Transaction } from 'data/Transactions/Transactions.types';

import { Box, Chip } from '@mui/material';

export const transactionColumns: TableColumn<Transaction>[] = [
    {
        key: 'type',
        label: 'Transaction',
        render: (value, row) => {
            void value;
            let text = '';
            if (row.type === 'Refund') {
                text = 'refund to';
            } else if (row.type === 'Failed') {
                text = 'failed from';
            } else {
                text = 'from';
            }

            return (
                <Box component="span">
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
            return <>{formattedDate}</>;
        },
    },
    {
        key: 'amount',
        label: 'Amount',
        align: 'right',
        render: (value) => (
            <>
                {Number(value) < 0 ? '-' : ''}
                {Math.abs(Number(value)).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    useGrouping: false,
                })}
            </>
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

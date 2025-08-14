import { Box, Chip } from '@mui/material';

import { Transaction } from '@data/Transactions/Transactions.types';

import { TableColumn } from './Transactions.type';

export const transactionColumns: TableColumn<Transaction>[] = [
    {
        key: 'type',
        label: 'Transaction',
        render: (_value, row) => {
            const text = (() => {
                switch (row.type) {
                    case 'Refund':
                        return 'refund to';
                    case 'Failed':
                        return 'failed from';
                    default:
                        return 'from';
                }
            })();
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
        hideOnMobile: true,
        render: (value) => {
            const n = Number(value);
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
                signDisplay: 'auto',
                useGrouping: true,
            });
            return <>{formatter.format(n)}</>;
        },
    },
    {
        key: 'status',
        label: 'Status',
        align: 'right',
        hideOnMobile: true,
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

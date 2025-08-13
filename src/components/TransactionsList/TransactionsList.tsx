import {
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import {
    RoundedTableCell,
    TransactionsTable,
    TransactionsTableContainer,
    TransactionsTableOverview,
} from './Transactions.style';
import { CustomTableProps } from './Transactions.type';

export const TransactionsList = <T extends { id: string }>({
    title,
    subtitle,
    columns,
    rows,
}: CustomTableProps<T>) => (
    <TransactionsTableContainer sx={{ boxShadow: 1 }}>
        <TransactionsTableOverview>
            <Typography variant="h2">{title}</Typography>
            {subtitle && (
                <Typography variant="body2" mb={4}>
                    {subtitle}
                </Typography>
            )}
        </TransactionsTableOverview>
        <TransactionsTable>
            <TableHead>
                <TableRow>
                    {columns.map((col, colIndex) => (
                        <TableCell
                            key={String(col.key)}
                            align={col.align ?? 'left'}
                            sx={{
                                borderRadius:
                                    colIndex === 0
                                        ? '16px 0 0 0'
                                        : colIndex === columns.length - 1
                                          ? '0 16px 0 0'
                                          : '0',
                                display: {
                                    xs:
                                        col.key === 'amount' ||
                                        col.key === 'status'
                                            ? 'none'
                                            : 'table-cell',
                                    sm: 'table-cell',
                                },
                            }}
                        >
                            <Typography variant="subtitle2">
                                {col.label}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        {columns.map((col, colIndex) => (
                            <RoundedTableCell
                                key={String(col.key)}
                                align={col.align ?? 'left'}
                                rounded={
                                    colIndex === 0
                                        ? 'left'
                                        : colIndex === columns.length - 1
                                          ? 'right'
                                          : undefined
                                }
                                sx={{
                                    display: {
                                        xs:
                                            col.key === 'amount' ||
                                            col.key === 'status'
                                                ? 'none'
                                                : 'table-cell',
                                        sm: 'table-cell',
                                    },
                                }}
                            >
                                {col.render
                                    ? col.render(row[col.key], row)
                                    : String(row[col.key])}
                            </RoundedTableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </TransactionsTable>
    </TransactionsTableContainer>
);

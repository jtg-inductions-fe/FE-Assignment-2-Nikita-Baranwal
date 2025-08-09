import { latestCustomersData } from 'data/LatestCustomers/LatestCustomers';

import { Avatar, Box, Typography } from '@mui/material';

import { InfoCardList } from '@components/ListCard/InfoCardList';

export const LatestCustomers = () => (
    <InfoCardList
        title="Latest Customers"
        data={latestCustomersData}
        renderItem={(customer) => (
            <>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                    key={customer.id}
                >
                    <Box display="flex" alignItems="center" gap={1.5}>
                        <Avatar src={customer.avatarUrl} />
                        <Box display="flex" flexDirection="column">
                            <Typography variant="h3">
                                {customer.name}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                {customer.email}
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="h3">${customer.amount}</Typography>
                </Box>
            </>
        )}
    />
);

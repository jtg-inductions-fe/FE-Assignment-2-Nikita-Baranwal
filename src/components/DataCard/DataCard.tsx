import { Avatar, Box, Divider, Typography } from '@mui/material';

import { theme } from '@theme/index';

import {
    DataCardContainer,
    DataCardDetails,
    DataCardItem,
    DataCardItems,
    DataCardValue,
} from './DataCard.style';
import { InfoListCardProps } from './DataCard.type';

export const DataCard = ({ title, data }: InfoListCardProps) => (
    <DataCardContainer sx={{ boxShadow: 1 }}>
        <Typography variant="h2" mb={2} px={6}>
            {title}
        </Typography>

        <DataCardItems role="list">
            {data.map((item, index) => (
                <Box key={item.id} role="listitem" width="100%">
                    <DataCardItem>
                        <DataCardDetails>
                            {item.avatarUrl && <Avatar src={item.avatarUrl} />}
                            <Box display="flex" flexDirection="column">
                                <Typography variant="h3">
                                    {item.name}
                                </Typography>
                                <Typography variant="caption">
                                    {item.description}
                                </Typography>
                            </Box>
                        </DataCardDetails>

                        <DataCardValue>
                            {item.startAdornment && (
                                <Box>{item.startAdornment}</Box>
                            )}
                            {item.count}
                            {item.endAdornment && (
                                <Box
                                    component="span"
                                    ml={0.5}
                                    color={theme.palette.grey[500]}
                                >
                                    {item.endAdornment}
                                </Box>
                            )}
                        </DataCardValue>
                    </DataCardItem>

                    {index < data.length - 1 && <Divider />}
                </Box>
            ))}
        </DataCardItems>
    </DataCardContainer>
);

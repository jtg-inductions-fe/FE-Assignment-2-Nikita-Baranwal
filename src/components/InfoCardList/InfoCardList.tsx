import { Avatar, Box, Divider, Typography } from '@mui/material';

import { theme } from '@theme/index';

import {
    InfoCard,
    InfoCardDetails,
    InfoCardItems,
    InfoCardListContainer,
    InfoCardValue,
} from './InfoCardList.style';
import { InfoListCardProps } from './InfoCardList.type';

export const InfoCardList = ({ title, data }: InfoListCardProps) => (
    <InfoCardListContainer sx={{ boxShadow: 1 }}>
        <Typography variant="h2" mb={2}>
            {title}
        </Typography>

        <InfoCardItems role="list">
            {data.map((item, index) => (
                <Box key={item.id} role="listitem" width="100%">
                    <InfoCard>
                        <InfoCardDetails>
                            {item.avatarUrl && <Avatar src={item.avatarUrl} />}
                            <Box display="flex" flexDirection="column">
                                <Typography variant="h3">
                                    {item.name}
                                </Typography>
                                <Typography variant="caption">
                                    {item.description}
                                </Typography>
                            </Box>
                        </InfoCardDetails>

                        <InfoCardValue>
                            {item.startAdornment && (
                                <Box>{item.startAdornment}</Box>
                            )}
                            {item.amount?.toLocaleString('en-US', {
                                maximumFractionDigits: 0,
                                useGrouping: false,
                            }) ?? item.sales}
                            {item.endAdornment && (
                                <Box ml={0.5} color={theme.palette.grey[500]}>
                                    {item.endAdornment}
                                </Box>
                            )}
                        </InfoCardValue>
                    </InfoCard>

                    {index < data.length - 1 && <Divider />}
                </Box>
            ))}
        </InfoCardItems>
    </InfoCardListContainer>
);

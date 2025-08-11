import {
    Avatar,
    Box,
    Divider,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';

import {
    InfoCard,
    InfoCardDetails,
    InfoCardItems,
    InfoCardListContainer,
} from './InfoCardList.style';
import { InfoListCardProps } from './InfoCardList.type';

export const InfoCardList = ({ title, data }: InfoListCardProps) => (
    <InfoCardListContainer>
        <Typography variant="h2" mb={2}>
            {title}
        </Typography>

        <InfoCardItems role="list">
            {data.map((item, index) => (
                <Box key={item.id} role="listitem" style={{ width: '100%' }}>
                    <InfoCard>
                        <InfoCardDetails>
                            {item.avatarUrl && <Avatar src={item.avatarUrl} />}
                            <Box display="flex" flexDirection="column">
                                {item.name && (
                                    <Typography variant="h3">
                                        {item.name}
                                    </Typography>
                                )}
                                {item.email && (
                                    <Typography variant="caption">
                                        {item.email}
                                    </Typography>
                                )}
                                {item.techStack && (
                                    <Typography variant="caption">
                                        {item.techStack}
                                    </Typography>
                                )}
                            </Box>
                        </InfoCardDetails>

                        <TextField
                            value={
                                item.email
                                    ? item.amount?.toLocaleString('en-US', {
                                          style: 'currency',
                                          currency: 'USD',
                                          maximumFractionDigits: 0,
                                          useGrouping: false,
                                      })
                                    : item.sales
                            }
                            slotProps={{
                                input: {
                                    endAdornment: !item.email && (
                                        <InputAdornment position="end">
                                            sales
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />
                    </InfoCard>

                    {index < data.length - 1 && <Divider />}
                </Box>
            ))}
        </InfoCardItems>
    </InfoCardListContainer>
);

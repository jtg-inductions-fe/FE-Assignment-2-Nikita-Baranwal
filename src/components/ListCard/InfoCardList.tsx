import { Box, Divider, Typography } from '@mui/material';

import { InfoCardItems, InfoCardListContainer } from './InfoCardList.style';
import { InfoCardListProps } from './InfoCardList.type';

export const InfoCardList = <T,>({
    title,
    data,
    renderItem,
}: InfoCardListProps<T>) => (
    <InfoCardListContainer>
        <Typography variant="h2" fontWeight={600} mb={2}>
            {title}
        </Typography>

        <InfoCardItems>
            {data.map((item, index) => (
                <Box key={index} width="100%">
                    {renderItem(item, index)}
                    {index < data.length - 1 && <Divider sx={{ py: 2 }} />}
                </Box>
            ))}
        </InfoCardItems>
    </InfoCardListContainer>
);

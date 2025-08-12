import { Typography } from '@mui/material';

import {
    LabelPrefix,
    LabelValue,
    SalesDot,
    SalesRow,
    TooltipContainer,
    TooltipLabel,
} from './SalesGraphTooltip.style';
import { SalesGraphTooltipProps } from './SalesGraphTooltip.type';

export const SalesGraphTooltip = ({
    payload,
    label,
}: SalesGraphTooltipProps) => {
    if (!payload || !payload.length) return null;

    return (
        <TooltipContainer sx={{ boxShadow: 1 }}>
            <TooltipLabel variant="caption">{`${label}, 2021`}</TooltipLabel>
            <SalesRow>
                <SalesDot />
                <Typography variant="body2">
                    <LabelPrefix>Sales:</LabelPrefix>{' '}
                    <LabelValue>${payload[0].value}k</LabelValue>
                </Typography>
            </SalesRow>
        </TooltipContainer>
    );
};

import { SalesGraphData } from 'data/SalesGraph/SalesGraph.type';
import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip as SalesLineToolTip,
} from 'recharts';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

import { SALESGRAPH_HEIGHT } from '@constant/common.constant';
import { theme } from '@theme/index';

import { DOMAIN, Y_TICKS } from './SalesGraph.constants';
import {
    SalesGraphContainer,
    SalesInfo,
    StyledCartesianGrid,
    StyledXAxis,
    StyledYAxis,
} from './SalesGraph.style';
import { SalesGraphTooltip } from './SalesGraphTooltip';

export const SalesGraph = ({ data }: { data: SalesGraphData[] }) => {
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <SalesGraphContainer sx={{ boxShadow: 1 }}>
            <SalesInfo>
                Sales
                <Tooltip title="More info" arrow>
                    <InfoOutlinedIcon
                        fontSize="small"
                        sx={{
                            color: theme.palette.grey[500],
                        }}
                    />
                </Tooltip>
            </SalesInfo>

            <ResponsiveContainer width="100%" height={SALESGRAPH_HEIGHT}>
                <LineChart
                    data={data}
                    margin={{
                        top: 20,
                        left: isSmallScreen ? -20 : 40,
                        bottom: isSmallScreen ? 40 : 10,
                    }}
                >
                    <StyledCartesianGrid vertical={false} />

                    <StyledXAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={isSmallScreen ? 30 : 20}
                        angle={isSmallScreen ? -45 : 0}
                        tickFormatter={(value: string) =>
                            new Date(value).toLocaleDateString('en-US', {
                                day: '2-digit',
                                month: 'short',
                            })
                        }
                    />

                    <StyledYAxis
                        ticks={Y_TICKS}
                        tickFormatter={(value) => `${value}K`}
                        domain={DOMAIN}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={isSmallScreen ? 0 : 50}
                        tick={isSmallScreen ? false : undefined}
                    />

                    <SalesLineToolTip
                        cursor={{
                            stroke: theme.palette.grey[200],
                            strokeWidth: 2,
                            strokeDasharray: '6 2',
                        }}
                        content={<SalesGraphTooltip label="string" />}
                    />

                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke={theme.palette.primary.main}
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </SalesGraphContainer>
    );
};

import { salesGraphData } from 'data/SalesGraph/SalesGraph';
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

import {
    SalesGraphContainer,
    SalesInfo,
    StyledCartesianGrid,
    StyledXAxis,
    StyledYAxis,
} from './SalesGraph.style';
import { SalesGraphTooltip } from './SalesGraphTooltip';

export const SalesGraph = () => {
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
                    data={salesGraphData}
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
                    />

                    <StyledYAxis
                        ticks={[0, 40, 80, 120, 160, 200, 240]}
                        tickFormatter={(value) => `${value}K`}
                        domain={[0, 240]}
                        tickLine={false}
                        axisLine={false}
                        tickMargin={isSmallScreen ? 0 : 50}
                        tick={isSmallScreen ? false : undefined}
                    />

                    <SalesLineToolTip
                        cursor={{
                            stroke: '#E5E7EB',
                            strokeWidth: 2,
                            strokeDasharray: '6 2',
                        }}
                        content={<SalesGraphTooltip />}
                    />

                    <Line
                        type="monotone"
                        dataKey="amount"
                        stroke="#00C49F"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </SalesGraphContainer>
    );
};

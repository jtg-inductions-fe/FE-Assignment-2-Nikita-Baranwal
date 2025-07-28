import { Typography } from '@mui/material';

import { HomeButton } from '@components';
import {
    ErrorContainer,
    ErrorContainerOverview,
    ErrorContainerOverviewTitle,
    ErrorImage,
} from '@container';

interface ErrorTemplateProps {
    info: {
        src: string;
        title: string;
        description: string;
    };
}

export const ErrorTemplate = ({ info }: ErrorTemplateProps) => (
    <ErrorContainer>
        <ErrorImage src={info.src} alt="Error Image" />
        <ErrorContainerOverview>
            <ErrorContainerOverviewTitle>
                <Typography variant="h1">{info.title}</Typography>
                <Typography variant="body1">{info.description}</Typography>
            </ErrorContainerOverviewTitle>
            <HomeButton />
        </ErrorContainerOverview>
    </ErrorContainer>
);

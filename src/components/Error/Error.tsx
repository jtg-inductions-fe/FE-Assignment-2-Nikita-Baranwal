import { Typography } from '@mui/material';

import { NavigateButton } from '@components';

import {
    ErrorContainer,
    ErrorContainerOverview,
    ErrorContainerOverviewTitle,
    ErrorImage,
} from './Error.styles';
import { ErrorTemplateProps } from './Error.types';

export const ErrorTemplate = ({ info }: ErrorTemplateProps) => (
    <ErrorContainer>
        <ErrorImage src={info.src} alt="Error Image" />
        <ErrorContainerOverview>
            <ErrorContainerOverviewTitle>
                <Typography variant="h1">{info.title}</Typography>
                <Typography variant="body1">{info.description}</Typography>
            </ErrorContainerOverviewTitle>
            <NavigateButton to="/" label="Go back home" />
        </ErrorContainerOverview>
    </ErrorContainer>
);

import { Typography } from '@mui/material';

import { Button } from '@components/Button';

import { ERROR_CONFIG, ERROR_TYPES } from './Error.constants';
import {
    ErrorContainer,
    ErrorContainerOverview,
    ErrorContainerOverviewTitle,
    ErrorImage,
} from './Error.styles';
import { ErrorTemplateProps } from './Error.types';

export const ErrorTemplate = ({ variant }: ErrorTemplateProps) => {
    const config =
        ERROR_CONFIG[
            variant === ERROR_TYPES.NOT_FOUND
                ? ERROR_TYPES.NOT_FOUND
                : ERROR_TYPES.SERVER_ERROR
        ];

    return (
        <ErrorContainer>
            <ErrorImage>
                <img src={config.src} alt="Server error" />
            </ErrorImage>
            <ErrorContainerOverview>
                <ErrorContainerOverviewTitle>
                    <Typography variant="h1">{config.title}</Typography>
                    <Typography variant="body1">
                        {config.description}
                    </Typography>
                </ErrorContainerOverviewTitle>
                <Button to="/" text="Go back home" />
            </ErrorContainerOverview>
        </ErrorContainer>
    );
};

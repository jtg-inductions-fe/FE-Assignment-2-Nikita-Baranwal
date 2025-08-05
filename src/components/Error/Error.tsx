import { Box, Typography } from '@mui/material';

import { Button } from '@components/Button';

import { ERROR_CONFIG, ERROR_TYPES } from './Error.constants';
import {
    ErrorContainer,
    ErrorContent,
    ImageContainer,
    SubContainer,
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
            <ImageContainer>
                <Box component="img" src={config.src} alt="Server error" />
            </ImageContainer>

            <SubContainer>
                <ErrorContent>
                    <Typography variant="h1">{config.title}</Typography>
                    <Typography variant="body1">
                        {config.description}
                    </Typography>
                </ErrorContent>
                <Button to="/" text="Go back home" />
            </SubContainer>
        </ErrorContainer>
    );
};

import { Box, IconButton, Typography } from '@mui/material';

import { socialIcons } from '@data/Footer';

import { FooterContainer } from './Footer.style';

export const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <FooterContainer>
            <Typography variant="body1">
                &copy; {currYear} Themesberg, LLC. All rights reserved.
            </Typography>
            <Box display="flex" gap={2}>
                {socialIcons.map(({ Icon, label, url }) => (
                    <IconButton
                        key={label}
                        aria-label={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={(theme) => ({ color: theme.palette.grey[900] })}
                    >
                        <Icon fontSize="medium" />
                    </IconButton>
                ))}
            </Box>
        </FooterContainer>
    );
};

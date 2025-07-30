import { Toolbar, Typography } from '@mui/material';

import { StyledAppBar } from './Navbar.styles';

export const Navbar = () => (
    <StyledAppBar position="fixed">
        <Toolbar>
            <Typography variant="h2" noWrap>
                Navbar
            </Typography>
        </Toolbar>
    </StyledAppBar>
);

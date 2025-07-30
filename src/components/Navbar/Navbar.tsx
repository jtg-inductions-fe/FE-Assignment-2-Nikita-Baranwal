import { Toolbar, Typography } from '@mui/material';

import { StyledAppBar } from './Navbar.styles';
import { NavbarProps } from './Navbar.types';
import { useTopNav } from '../../container/Navbar.container';

export const Navbar = (props: NavbarProps) => {
    const { title } = useTopNav(props);

    return (
        <StyledAppBar position="fixed">
            <Toolbar>
                <Typography variant="h2" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </StyledAppBar>
    );
};

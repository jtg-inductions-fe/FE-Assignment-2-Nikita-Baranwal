import { useState } from 'react';

import { Box, IconButton, Menu, Typography } from '@mui/material';

import { StyledAvatar } from './UserAvatarMenu.styles';
import { UserAvatarMenuProps } from './UserAvatarMenu.types';

export const UserAvatarMenu = ({
    user,
    showPopover = true,
}: UserAvatarMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorEl(event.currentTarget);

    const handleMenuClose = () => setAnchorEl(null);

    return (
        <Box>
            <IconButton
                aria-haspopup="true"
                aria-expanded={!!anchorEl}
                onClick={(e) => showPopover && handleAvatarClick(e)}
                aria-controls={!!anchorEl ? 'user-menu' : undefined}
            >
                <StyledAvatar src={user.avatar} alt={user.name} />
            </IconButton>

            {showPopover && (
                <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={!!anchorEl}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box px={2} py={1}>
                        <Typography variant="h3">{user.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email}
                        </Typography>
                    </Box>
                </Menu>
            )}
        </Box>
    );
};

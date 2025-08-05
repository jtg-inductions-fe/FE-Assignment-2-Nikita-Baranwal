import { Box, IconButton, Menu, Typography } from '@mui/material';

import { UserAvatarMenuHandler } from '@container/UserAvatarMenu';

import { StyledAvatar } from './UserAvatarMenu.styles';
import { UserAvatarMenuProps } from './UserAvatarMenu.types';

export const UserAvatarMenu = ({
    user,
    showPopover = true,
}: UserAvatarMenuProps) => {
    const { anchorEl, handleAvatarClick, handleMenuClose, isOpen } =
        UserAvatarMenuHandler();

    return (
        <Box>
            <IconButton
                onClick={(e) => handleAvatarClick(e, showPopover)}
                aria-controls={isOpen ? 'user-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <StyledAvatar src={user.avatar} alt={user.name} />
            </IconButton>

            {showPopover && (
                <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={isOpen}
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
                    <Box sx={{ px: 2, py: 1 }}>
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

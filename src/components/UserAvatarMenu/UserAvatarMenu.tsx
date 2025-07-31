import { Box, IconButton, Menu, Typography } from '@mui/material';

import { useUserAvatarMenu } from '@container';

import { StyledAvatar } from './UserAvatarMenu.styles';
import { Props } from './UserAvatarMenu.types';

export const UserAvatarMenu = ({ user, withPopover = true }: Props) => {
    const { anchorEl, handleAvatarClick, handleMenuClose, isOpen } =
        useUserAvatarMenu();

    return (
        <>
            <IconButton
                onClick={(e) => handleAvatarClick(e, withPopover)}
                aria-controls={isOpen ? 'user-menu' : undefined}
                aria-haspopup="true"
            >
                <StyledAvatar
                    src={user?.avatarSrc || ''}
                    alt={user?.name || 'User Avatar'}
                />
            </IconButton>

            {withPopover && (
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
                        <Typography variant="h3">
                            {user?.name || 'No Name'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user?.email || 'No Email'}
                        </Typography>
                    </Box>
                </Menu>
            )}
        </>
    );
};

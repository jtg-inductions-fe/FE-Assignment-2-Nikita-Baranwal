import { ListItemButton } from '@mui/material';
import { listItemButtonClasses } from '@mui/material/ListItemButton';
import { listItemIconClasses } from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import { typographyClasses } from '@mui/material/Typography';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
    color: theme.palette.grey[900],

    [`& .${listItemIconClasses.root}`]: {
        color: theme.palette.grey[900],
    },

    [`& .${typographyClasses.root}`]: {
        color: theme.palette.grey[900],
    },

    [`&.${listItemButtonClasses.selected}`]: {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent',

        [`& .${listItemIconClasses.root}`]: {
            color: theme.palette.primary.main,
        },

        [`& .${typographyClasses.root}`]: {
            color: theme.palette.primary.main,
        },

        '&:hover': {
            backgroundColor: 'transparent',
        },
    },

    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

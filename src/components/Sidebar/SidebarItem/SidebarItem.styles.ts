import {
    ListItemButton,
    listItemButtonClasses,
    listItemIconClasses,
    styled,
    typographyClasses,
} from '@mui/material';

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => {
    const {
        typography: { pxToRem },
        palette: { grey, primary },
    } = theme;

    return {
        color: grey[900],
        marginTop: pxToRem(10),
        marginBottom: pxToRem(10),

        [`& .${listItemIconClasses.root}`]: {
            color: grey[900],
        },

        [`&.${listItemButtonClasses.selected}`]: {
            color: primary.main,
            backgroundColor: 'transparent',

            [`& .${listItemIconClasses.root}`]: {
                color: primary.main,
            },

            [`& .${typographyClasses.root}`]: {
                color: primary.main,
            },
        },

        '&:hover': {
            backgroundColor: grey[200],
            borderRadius: pxToRem(12),
        },
    };
});

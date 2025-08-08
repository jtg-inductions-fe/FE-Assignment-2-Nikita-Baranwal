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
        palette: { grey, primary, action },
    } = theme;

    return {
        color: grey[900],
        marginTop: pxToRem(10),
        marginBottom: pxToRem(10),
        borderRadius: pxToRem(12),

        [`& .${listItemIconClasses.root}`]: {
            color: grey[900],
        },

        [`&.${listItemButtonClasses.selected}`]: {
            color: primary.main,
            backgroundColor: action.selected,

            [`& .${listItemIconClasses.root}`]: {
                color: primary.main,
            },

            [`& .${typographyClasses.root}`]: {
                color: primary.main,
            },
        },

        '&:hover': {
            backgroundColor: grey[200],
        },
    };
});

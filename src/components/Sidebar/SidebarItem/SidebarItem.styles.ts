import {
    Collapse,
    collapseClasses,
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
        borderRadius: pxToRem(12),

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
        },
    };
});

export const StyledCollapse = styled(Collapse)(({ theme }) => {
    const { mixins } = theme;

    return {
        [`& .${collapseClasses.wrapperInner}`]: {
            ...mixins.flex('center', 'center', 'column'),
            width: '100%',
        },
    };
});

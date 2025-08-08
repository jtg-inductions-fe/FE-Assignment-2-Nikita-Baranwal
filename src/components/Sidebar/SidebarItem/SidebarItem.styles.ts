import {
    Collapse,
    collapseClasses,
    listClasses,
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
    const {
        mixins,
        palette: { grey },
    } = theme;

    return {
        [`& .${collapseClasses.wrapper}`]: {
            ...mixins.flex('center', 'flex-end', 'column'),
            width: '100%',
        },
        [`& .${collapseClasses.wrapperInner}`]: {
            ...mixins.flex('center', 'flex-start', 'column'),
            width: '78%',
        },
        [`& .${listClasses.root}`]: {
            width: '100%',
        },
        [`& .${listItemButtonClasses.root}`]: {
            '&:hover': {
                backgroundColor: grey[200],
            },
        },
    };
});

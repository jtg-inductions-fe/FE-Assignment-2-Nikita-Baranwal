import { ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = {
    to: string;
    text: string;
    /*
     * Button variant
     * @default 'contained'
     */
    variant?: MuiButtonProps['variant'];
};

import { useNavigate } from 'react-router-dom';

import { Button as MUiButton } from '@mui/material';

import { ButtonProps } from './Button.types';

export const Button = ({ to, text, variant = 'contained' }: ButtonProps) => {
    const navigate = useNavigate();

    return (
        <MUiButton
            variant={variant}
            onClick={() => {
                void navigate(to);
            }}
        >
            {text}
        </MUiButton>
    );
};

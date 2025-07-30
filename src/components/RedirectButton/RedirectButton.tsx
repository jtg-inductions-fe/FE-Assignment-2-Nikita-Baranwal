import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import type { RedirectButtonProps } from './RedirectButton.types';

export const RedirectBUtton = ({ to, label }: RedirectButtonProps) => {
    const navigate = useNavigate();

    return (
        <Button
            variant="contained"
            onClick={() => {
                void navigate(to);
            }}
        >
            {label}
        </Button>
    );
};

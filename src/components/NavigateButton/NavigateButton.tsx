import { useNavigate } from 'react-router-dom';

import { Button } from '@mui/material';

import type { NavigateButtonProps } from './NavigateButton.types';

const NavigateButton = ({ to, label }: NavigateButtonProps) => {
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

export default NavigateButton;

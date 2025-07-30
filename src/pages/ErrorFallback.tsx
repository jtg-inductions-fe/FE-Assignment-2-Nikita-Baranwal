import { ErrorTemplate } from 'components/Error';
import { ERROR_TYPES } from 'components/Error/Error.constants';

import { Navbar } from '@components';

export const ErrorFallback = () => (
    <>
        <Navbar />
        <ErrorTemplate variant={ERROR_TYPES.SERVER_ERROR} />
    </>
);

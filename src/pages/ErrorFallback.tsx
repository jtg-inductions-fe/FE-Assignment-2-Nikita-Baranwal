import { ErrorTemplate } from '@components/Error';
import { ERROR_TYPES } from '@components/Error/Error.constants';

export const ErrorFallback = () => (
    <ErrorTemplate variant={ERROR_TYPES.SERVER_ERROR} />
);

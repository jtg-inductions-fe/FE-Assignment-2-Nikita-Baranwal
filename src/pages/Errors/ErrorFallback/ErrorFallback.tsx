import { ERROR_TYPES, ErrorTemplate } from '@components/Error';

export const ErrorFallback = () => (
    <ErrorTemplate variant={ERROR_TYPES.SERVER_ERROR} />
);

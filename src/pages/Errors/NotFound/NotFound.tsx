import { ErrorTemplate } from '@components/Error';
import { ERROR_TYPES } from '@components/Error/Error.constants';

export const NotFound = () => <ErrorTemplate variant={ERROR_TYPES.NOT_FOUND} />;

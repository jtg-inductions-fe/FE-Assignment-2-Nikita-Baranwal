import { ERROR_TYPES } from './Error.constants';

export type ErrorTemplateProps = {
    variant: (typeof ERROR_TYPES)[keyof typeof ERROR_TYPES];
};

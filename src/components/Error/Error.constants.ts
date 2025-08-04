import NotFoundImage from '@assets/images/404.png';
import FallbackImage from '@assets/images/error.png';

export const ERROR_TYPES = {
    SERVER_ERROR: 'SERVER_ERROR',
    NOT_FOUND: 'NOT_FOUND',
} as const;

export const ERROR_CONFIG = {
    [ERROR_TYPES.SERVER_ERROR]: {
        src: FallbackImage,
        title: 'Something has gone seriously wrong',
        description:
            'It’s always time for a coffee break. We should be back by the time you finish your coffee.',
    },
    [ERROR_TYPES.NOT_FOUND]: {
        src: NotFoundImage,
        title: 'Page not found',
        description:
            'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
    },
};

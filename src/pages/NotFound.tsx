import { ErrorTemplate } from 'components/Error';

import NotFoundImage from '@assets/images/404.png';

const info = {
    src: NotFoundImage,
    title: 'Page not found',
    description:
        'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
};

export const NotFoundError = () => <ErrorTemplate info={info} />;

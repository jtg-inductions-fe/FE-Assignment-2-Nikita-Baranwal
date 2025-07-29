import { ErrorTemplate } from 'components/Error';

import FallbackImage from '@assets/images/error.png';

const info = {
    src: FallbackImage,
    title: 'Something has gone seriously wrong',
    description:
        'It’s always time for a coffee break We should be back by the time you finish your coffee.',
};

export const ErrorFallback = () => <ErrorTemplate info={info} />;

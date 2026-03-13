import * as Sentry from '@sentry/node';
import { sentryRelease } from '../shared/sentryRelease';

Sentry.init({
    dsn: process.env.SENTRY_DSN,

    environment: process.env.NODE_ENV,

    release: sentryRelease,

    tracesSampleRate: 0.05,

    beforeSend(event) {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Sentry server event:', event);
        }
        return event;
    },
});

import * as Sentry from '@sentry/react';
import { sentryRelease } from '../shared/sentryRelease';

Sentry.init({
    dsn: process.env.SENTRY_DSN,

    environment: process.env.NODE_ENV,

    release: sentryRelease,

    integrations: [
        Sentry.browserTracingIntegration(),
    ],

    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1,

    sendDefaultPii: false,

    beforeSend(event) {
        if (process.env.NODE_ENV !== 'production') {
            console.log('Sentry client event:', event);
        }
        return event;
    },
});

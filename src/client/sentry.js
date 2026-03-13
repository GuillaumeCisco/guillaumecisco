/* eslint-disable no-undef */


import * as Sentry from '@sentry/react';

Sentry.init({
    dsn: process.env.SENTRY_DSN,

    environment: process.env.NODE_ENV,

    release: SENTRY_RELEASE,

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

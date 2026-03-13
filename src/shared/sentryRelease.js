export const sentryRelease =
    `${process.env.SENTRY_PROJECT_DASHBOARD || 'dashboard'}@${process.env.npm_package_version}+${process.env.SHORT_SHA}`;

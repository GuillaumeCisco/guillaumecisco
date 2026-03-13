const packageInfo = require('../package.json');

const sentryRelease =
    `${process.env.SENTRY_PROJECT_DASHBOARD || 'dashboard'}@${packageInfo.version}+${process.env.SHORT_SHA || 'local'}`;

module.exports = sentryRelease;

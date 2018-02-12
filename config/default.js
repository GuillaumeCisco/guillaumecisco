const apiPort = process.env.NODE_PORT || 3000;
const secureApiPort = process.env.SECURE_NODE_PORT || 3443;
const ravenUrl = process.env.RAVEN_URL || '';

module.exports = {
    appName: 'Guillaume Cisco',
    apps: {
        frontend: {
            api_port: apiPort,
            secure_api_port: secureApiPort,
            baseName: {
                production: '/',
                debug: '/guillaumecisco/build/frontend/',
            },
            meta: {
                description: 'Guillaume Cisco Resume',
                keywords: 'guillaume cisco'
            },
            raven_url: ravenUrl,
        },
    }
};

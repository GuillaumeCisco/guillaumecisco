const apiPort = process.env.NODE_PORT || 3000;

module.exports = {
    appName: 'Guillaume Cisco',
    apps: {
        frontend: {
            api_port: apiPort,
            baseName: {
                production: '/',
                debug: '/guillaumecisco/build/frontend/',
            },
            meta: {
                description: 'Guillaume Cisco Resume',
                keywords: 'guillaume cisco'
            }
        },
    }
};

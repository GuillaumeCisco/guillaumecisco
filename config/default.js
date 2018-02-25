const apiPort = process.env.NODE_PORT || 3000;
const secureApiPort = process.env.SECURE_NODE_PORT || 3443;
const ravenUrl = process.env.RAVEN_URL || '';
const encryption_privkey = './encryption/ca.key';
const encryption_fullchain = './encryption/ca.crt';
const redis_host = process.env.REDIS_HOST || 'localhost';
const redis_port = process.env.REDIS_PORT || 6379;

module.exports = {
    appName: 'Guillaume Cisco',
    apps: {
        frontend: {
            api_port: apiPort,
            secure_api_port: secureApiPort,
            baseName: {
                production: '/',
                debug: '/guillaumecisco/build/ssr/client/',
            },
            meta: {
                description: 'Guillaume Cisco Resume',
                keywords: 'guillaume cisco',
            },
            raven_url: ravenUrl,
        },
    },
    encryption: {
        privkey: encryption_privkey,
        fullchain: encryption_fullchain,
    },
    redis: {
        host: redis_host,
        redis: redis_port,
    },
};

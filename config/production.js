const encryption_privkey = '/etc/letsencrypt/live/guillaumecisco.com/privkey.pem';
const encryption_fullchain = '/etc/letsencrypt/live/guillaumecisco.com/fullchain.pem';

module.exports = {
    apps: {
        frontend: {
            baseName: {
                production: '/',
            },
        },
    },
    encryption: {
        privkey: encryption_privkey,
        fullchain: encryption_fullchain,
    },
};

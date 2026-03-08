const path = require('path');
const PWAManifestPlugin = require('../src/lib/plugins/PWAManifestPlugin.js');

module.exports = new PWAManifestPlugin({
        iconsPath: path.resolve(__dirname, '../src/assets/img/'),
    },
    {
        name: 'Guillaume Cisco',
        short_name: 'G. Cisco',
        start_url: '/',
        display: 'standalone',
        background_color: '#000',
        theme_color: '#000',
        icons: [
            {
                src: '/dist/web/launcher-icon-0-75x.png',
                sizes: '36x36',
                type: 'image/png',
                density: 0.75,
            },
            {
                src: '/dist/web/launcher-icon-1x.png',
                sizes: '48x48',
                type: 'image/png',
                density: 1.0,
            },
            {
                src: '/dist/web/launcher-icon-1-5x.png',
                sizes: '72x72',
                type: 'image/png',
                density: 1.5,
            },
            {
                src: '/dist/web/launcher-icon-2x.png',
                sizes: '96x96',
                type: 'image/png',
                density: 2.0,
            },
            {
                src: '/dist/web/launcher-icon-3x.png',
                sizes: '144x144',
                type: 'image/png',
                density: 3.0,
            },
            {
                src: '/dist/web/launcher-icon-4x.png',
                sizes: '192x192',
                type: 'image/png',
                density: 4.0,
            },
            {
                src: '/dist/web/launcher-icon-high-res.png',
                sizes: '512x512',
                type: 'image/png',
                density: 4.0,
            },
        ],
    },
);

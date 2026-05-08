// scripts/post-build.js
const fs = require('fs');
const path = require('path');

fs.mkdirSync('public/icons', { recursive: true });
fs.readdirSync('src/assets/img')
    .filter(f => f.endsWith('.png'))
    .forEach(f => fs.copyFileSync(
        path.join('src/assets/img', f),
        path.join('public/icons', f)
    ));

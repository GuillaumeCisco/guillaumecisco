// scripts/post-build.js
const fs = require('fs');
const path = require('path');

// Copie les icônes de src/assets vers public/icons
fs.mkdirSync('public/icons', { recursive: true });
fs.readdirSync('src/assets/img')
    .filter(f => f.endsWith('.png'))
    .forEach(f => fs.copyFileSync(
        path.join('src/assets/img', f),
        path.join('public/icons', f)
    ));

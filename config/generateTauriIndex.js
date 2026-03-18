const fs = require('fs');
const path = require('path');

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>guillaumecisco</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

const outDir = path.resolve(__dirname, '../public');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
console.log('✓ public/index.html generated');

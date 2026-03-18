const { execSync } = require('child_process');
const path = require('path');

const root = path.resolve(__dirname, '..');
const rspack = path.join(root, 'node_modules', '.bin', 'rspack');
const config = path.join(root, 'config', 'rspack.config.tauri.js');

require('./generateTauriIndex');

execSync(`"${rspack}" build --config "${config}"`, {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' },
});

// src/lib/plugins/PWAManifestPlugin.js
const fs = require('fs');
const path = require('path');

class PWAManifestPlugin {
    constructor(options, json) {
        this.options = {
            filename: 'manifest.json',
            iconsPath: __dirname,
            extension: '.png',
            ...options,
        };
        this.json = JSON.stringify(json, null, 2);
    }

    apply(compiler) {
        compiler.hooks.thisCompilation.tap('PWAManifestPlugin', (compilation) => {
            compilation.hooks.processAssets.tapAsync(
                {
                    name: 'PWAManifestPlugin',
                    stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
                },
                async (assets, cb) => {
                    try {
                        const iconsPath = this.options.iconsPath;
                        const files = fs.readdirSync(iconsPath)
                            .filter(f => f.endsWith(this.options.extension));

                        for (const file of files) {
                            const content = fs.readFileSync(path.join(iconsPath, file));
                            compilation.emitAsset(file, new compiler.webpack.sources.RawSource(content));
                        }

                        compilation.emitAsset(
                            this.options.filename,
                            new compiler.webpack.sources.RawSource(this.json)
                        );

                        cb();
                    } catch (err) {
                        cb(err);
                    }
                }
            );
        });
    }
}

module.exports = PWAManifestPlugin;

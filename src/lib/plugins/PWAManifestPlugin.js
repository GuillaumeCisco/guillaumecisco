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
                        compilation.emitAsset(
                            'offline.html',
                            new compiler.webpack.sources.RawSource(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Offline — Guillaume Cisco</title>
<style>
html,body{
margin:0;
padding:0;
background:#000;
color:#d9d9d9;
font-family:system-ui,sans-serif;
height:100%;
display:flex;
align-items:center;
justify-content:center;
}
.wrapper{text-align:center;}
.star{font-size:42px;margin-bottom:16px;}
.title{font-size:22px;margin-bottom:10px;}
.subtitle{font-size:14px;opacity:.7;}
</style>
</head>
<body>
<div class="wrapper">
<div class="star">✦</div>
<div class="title">Offline mode</div>
<div class="subtitle">Reconnect to continue exploring my universe.</div>
</div>
</body>
</html>
`)
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

// src/lib/plugins/LazySliceVirtualHMRPlugin.js

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const {default: VirtualModulesPlugin} = require('rspack-plugin-virtual-module');

class LazySliceVirtualHMRPlugin {
    constructor({sliceDir = 'src/app'} = {}) {
        this.sliceDir = sliceDir;

        this.virtualModulePath = path.resolve(
            process.cwd(),
            'src',
            '__virtual__',
            'hmr-cache-lazy.js',
        );

        this.virtualRequest = '@hmr-cache-lazy';

        this.lastSource = null;

        this.vmp = new VirtualModulesPlugin({
            [this.virtualModulePath]: '// placeholder',
        });
    }

    apply(compiler) {
        compiler.options.resolve.alias =
            compiler.options.resolve.alias || {};

        compiler.options.resolve.alias[this.virtualRequest] =
            this.virtualModulePath;

        this.vmp.apply(compiler);

        compiler.hooks.beforeCompile.tapAsync(
            'LazySliceVirtualHMRPlugin',
            (_params, callback) => {
                try {
                    const isWeb =
                        compiler.options.name === 'client';

                    if (!isWeb) {
                        const emptyModule =
                            'export default function() {}';

                        if (this.lastSource !== emptyModule) {
                            this.lastSource = emptyModule;

                            this.vmp.writeModule(
                                this.virtualModulePath,
                                emptyModule,
                            );
                        }

                        callback();

                        return;
                    }

                    const absSliceDir = path.resolve(
                        process.cwd(),
                        this.sliceDir,
                    );

                    const pattern = path.join(
                        absSliceDir,
                        '**/*.{js,jsx,ts,tsx}',
                    );

                    const files = glob.sync(pattern, {
                        absolute: true,
                    });

                    const sliceFiles = files.filter((f) => {
                        try {
                            return fs
                                .readFileSync(f, 'utf8')
                                .includes('createLoadableSlice(');
                        } catch {
                            return false;
                        }
                    });

                    let src = `// Auto-generated HMR helper
export default function makeReducersLoadable(store) {
  if (!module.hot) return;

`;

                    if (!sliceFiles.length) {
                        src +=
                            'console.log("[HMR] No lazy slices found");\n';
                    }

                    const loaderDir = path.dirname(
                        this.virtualModulePath,
                    );

                    for (const abs of sliceFiles) {
                        let rel = path
                            .relative(loaderDir, abs)
                            .replace(/\\\\/g, '/');

                        if (!rel.startsWith('.')) {
                            rel = `./${rel}`;
                        }

                        src += `
  module.hot.accept('${rel}', async () => {
    try {
      const m = await import('${rel}');

      console.log('[HMR] Reloading slice: ${rel}');

      store.injectSlice(m.default);
    } catch (err) {
      console.error(
        '[HMR] Failed reloading slice: ${rel}',
        err,
      );
    }
  });

`;
                    }

                    src += `}
`;

                    // CRITICAL FIX:
                    // avoid infinite invalidation loops
                    if (src !== this.lastSource) {
                        this.lastSource = src;

                        this.vmp.writeModule(
                            this.virtualModulePath,
                            src,
                        );
                    }

                    callback();
                } catch (err) {
                    console.error(
                        '[LazySliceVirtualHMRPlugin]',
                        err,
                    );

                    callback(err);
                }
            },
        );
    }
}

module.exports = LazySliceVirtualHMRPlugin;

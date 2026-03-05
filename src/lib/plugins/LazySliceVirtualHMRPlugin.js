// src/lib/plugins/LazySliceVirtualHMRPlugin.js
const path = require('path');
const fs = require('fs');
const glob = require('glob');
const VirtualModulesPlugin = require('webpack-virtual-modules');

class LazySliceVirtualHMRPlugin {
    constructor({sliceDir = 'src/app'} = {}) {
        this.sliceDir = sliceDir;
        this.virtualModulePath = path.resolve(
            process.cwd(), 'src', '__virtual__', 'hmr-cache-lazy.js',
        );
        this.virtualRequest = '@hmr-cache-lazy';
        this.vmp = new VirtualModulesPlugin();
    }

    apply(compiler) {
        this.vmp.apply(compiler);

        compiler.hooks.beforeCompile.tapAsync(
            'LazySliceVirtualHMRPlugin',
            (_params, callback) => {
                const absSliceDir = path.resolve(process.cwd(), this.sliceDir);
                const pattern = path.join(absSliceDir, '**/*.{js,jsx,ts,tsx}');
                const files = glob.sync(pattern, {absolute: true});

                const sliceFiles = files.filter(f =>
                    fs.readFileSync(f, 'utf8').includes('createLoadableSlice('),
                );

                let src = `// Auto-generated HMR helper
export default function makeReducersLoadable(store) {
  if (!module.hot) return;

`;

                const loaderDir = path.dirname(this.virtualModulePath);

                for (const abs of sliceFiles) {
                    let rel = path.relative(loaderDir, abs).replace(/\\/g, '/');
                    rel = rel.replace(/\.tsx?$/, '.js');
                    if (!rel.startsWith('.')) rel = `./${rel}`;

                    src += `  // Require for HMR tracking (do not inject)
  require('${rel}');
  module.hot.accept('${rel}', async () => {
    const m = await import('${rel}');
    console.log('[HMR] Reloading slice: ${rel}');
    store.injectSlice(m.default);
  });

`;
                }

                src += `}
`;

                this.vmp.writeModule(this.virtualModulePath, src);
                callback();
            },
        );

        compiler.hooks.afterResolvers.tap('LazySliceVirtualHMRPlugin', () => {
            compiler.options.resolve.alias = compiler.options.resolve.alias || {};
            compiler.options.resolve.alias[this.virtualRequest] = this.virtualModulePath;
        });
    }
}

module.exports = LazySliceVirtualHMRPlugin;

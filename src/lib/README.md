# HMR + Lazy redux reducers

Replace all your createSlice by createLoadableSlice.
Add `reducerParent: 'authentication',` in each of your slices.
Load your slices in your component thanks to:
```javascript
const {__sliceLoading, ...rest} = useSlice(() => import('./slice.js'), 'authentication.reset_token');
// __sliceLoading tells us is the chunk is loading, you should return a loader in your component in this case.
```
Be careful, to only call your selectors on components whom parent already loaded the slice and __sliceLoading is false

When creating your store, add:
```javascript
 // reducer HMR handling
store.injectSlice = injectSlice(store, rootReducer);
if (process.env.NODE_ENV !== 'production' && module.hot) {
    try {
        const makeReducersLoadable = require('@hmr-cache-lazy').default;
        makeReducersLoadable(store);
        console.log('Loaded HMR cache!');
    }
    catch (e) {
        console.error('Could not load @hmr-cache-lazy:', e);
    }
}
```
To allow HMR to work with lazy reducers.

In webpack, be sure to update modules, alias and plugins (if using Create react app, remember to eject):
```javascript
    resolve: {
        modules: ['node_modules', path.resolve(process.cwd(), '.hmr-cache'), paths.appNodeModules].concat(
            modules.additionalModulePaths || [],
        ), 
        alias: {
            // Support React Native Web
            // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
            'react-native': 'react-native-web',
            // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
                'react-dom$': 'react-dom/profiling',
                'scheduler/tracing': 'scheduler/tracing-profiling',
            }),
        ...({'@hmr-cache-lazy': path.resolve(process.cwd(), '.hmr-cache/lazy-slice-hmr.js')}),
        ...(modules.webpackAliases || {}),
        },
        plugins: [
            // Prevents users from importing files from outside of src/ (or node_modules/).
            // This often causes confusion because we only process files within src/ with babel.
            // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
            // please link the files into your node_modules/ and let module-resolution kick in.
            // Make sure your source files are compiled, as they will not be processed in any way.
            new ModuleScopePlugin(paths.appSrc, [
                paths.appPackageJson,
                reactRefreshRuntimeEntry,
                reactRefreshWebpackPluginRuntimeEntry,
                reactRefreshWebpackPluginOverlayRuntimeEntry,
                babelRuntimeEntry,
                babelRuntimeEntryHelpers,
                babelRuntimeRegenerator,
                path.resolve(__dirname, '../../.hmr-cache'),
            ]),
        ]
    }
```
Here I use `.hmr-cache` and load the plugin this way:
```javascript
isEnvDevelopment
&& shouldUseReactRefresh && target === 'web' && new LazySliceHMRPlugin({
    cacheDir: '.hmr-cache',
    sliceDir: 'src/app',
})
```

Be cautious with your paths.



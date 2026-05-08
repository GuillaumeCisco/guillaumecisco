import {combineReducers, configureStore} from '@reduxjs/toolkit';
import rootReducer from './reducers';
import injectSlice from "../lib/src/injectSlice";

const configureAppStore = (preloadedState) => {
    const store = configureStore({
        reducer: combineReducers(rootReducer),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: true}),
        preloadedState,
    });

    // reducer lazy load handling
    store.injectSlice = injectSlice(store, rootReducer);
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        try {
            const mod = require('@hmr-cache-lazy');

            const enableLazySliceHMR =
                typeof mod === 'function'
                    ? mod
                    : mod.default;

            enableLazySliceHMR(store);

            console.log('Loaded HMR cache!');
        } catch (e) {
            console.error('Could not load @hmr-cache-lazy:', e);
        }
    }
    return store;
};

export default configureAppStore;
